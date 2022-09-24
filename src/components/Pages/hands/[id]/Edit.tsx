import { useQuery, useReactiveVar } from '@apollo/client'
import { Button, Space } from '@mantine/core'
import DraftJSEditor from 'components/molecule/DraftJSEditor'
// import { editingReviewVar } from 'cache'
import ActionTable from 'components/organism/ActionTable'
import { Layout } from 'components/template/Layout'
import { validate } from 'graphql'
import { initializeApollo } from 'lib/apolloClient'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Router, { useRouter } from 'next/router'

import React, { FC, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  editingActionsState,
  editingCardsState,
  editingContentState,
  editingESState,
  editingPotState,
  editingReviewState,
  editingTitleState,
  isDataState,
} from 'store/stores'
import {
  Actions_Constraint,
  Actions_Insert_Input,
  Cards_Constraint,
  Cards_Insert_Input,
  Cards_Update_Column,
  GetAllHandIDsQuery,
  GetAllHandsQuery,
  GetHandByIdQuery,
  Hands,
  Hands_Cards_Constraint,
  Hands_Cards_Insert_Input,
  Hands_Cards_Update_Column,
  Pots_Constraint,
  Pots_Update_Column,
  useCreateHandsMutation,
  useGetHandByIdQuery,
} from 'types/generated/graphql'
import { ActionInterface, CardInterface } from 'types/localTypes/types'
type Props = {
  hand: Hands
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const apolloClient = initializeApollo()
//   const { data } = await apolloClient.query<GetAllHandIDsQuery>({
//     query: GET_HAND_IDS,
//   })
//   console.log('getStaticPaths', data.hands)
//   const paths = data.hands.map((hand) => ({
//     params: {
//       id: hand.id,
//     },
//   }))
//   return {
//     paths,
//     fallback: true,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const apolloClient = initializeApollo()
//   if (params && params.id) {
//     const { data } = await apolloClient.query<GetHandByIdQuery>({
//       query: GET_HAND_BY_ID,
//       variables: { id: params.id },
//     })
//     return {
//       props: {
//         hand: data.hands_by_pk,
//       },
//       revalidate: 1,
//     }
//   }
//   return { props: { hand: 1 } }
// }

const Edit = () => {
  //const editingReview = useReactiveVar(editingReviewVar)
  const [editingReview, setEditingReview] = useRecoilState(editingReviewState)
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  const [editingES, setEditingES] = useRecoilState(editingESState)
  const [editingPot, setEditingPot] = useRecoilState(editingPotState)
  const [editingTitle, setEditingTitle] = useRecoilState(editingTitleState)
  const [editingContent, setEditingContent] =
    useRecoilState(editingContentState)
  const [isData, setIsData] = useRecoilState(isDataState)

  const router = useRouter()
  const { id } = router.query
  // setEditingCards([{ num: '3', mark: 'K' }])
  // console.log(editingCards)
  // const { data, error, loading } = useQuery<GetHandByIdQuery>(GET_HAND_BY_ID, {
  //   fetchPolicy: 'cache-and-network',
  //   variables: { id: id },
  // })
  const { data, error, loading } = useGetHandByIdQuery({
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  })
  useEffect(() => {
    setIsData(!loading)
  }, [loading])
  useEffect(() => {
    if (data?.hands_by_pk) {
      const cardList: CardInterface[] = []
      data.hands_by_pk?.hands_cards.forEach((card) => {
        cardList.push({ num: card.card.num, mark: card.card.mark })
      })
      setEditingCards(cardList)

      const actionsList: ActionInterface[][] = [[], [], [], []]
      for (let i = 0; i <= 3; i++) {
        data.hands_by_pk.actions.forEach((action) => {
          if (action.street === i) {
            actionsList[i].push({
              move: action.move,
              size: action.size,
              position: action.position,
              order: action.order,
              street: i,
            })
          }
        })
      }
      setEditingActions(actionsList)
      setEditingTitle(data.hands_by_pk?.title)
      setEditingContent(data.hands_by_pk?.content)
      setEditingES(data.hands_by_pk?.es)
      const PotList: number[] = []
      data.hands_by_pk.pots.forEach((pot) => {
        PotList.push(pot.size)
      })
      setEditingPot(PotList)
      setEditingReview(data)
    }
  }, [data])

  const [createHandsMutation] = useCreateHandsMutation()
  const onClickSave = () => {
    const actionList: Actions_Insert_Input[] = []
    editingActions.forEach((street) => {
      street.forEach((action) => {
        actionList.push({
          position: action.position,
          move: action.move,
          size: action.size,
          order: action.order,
          street: action.street,
        })
      })
    })
    const cardList: Hands_Cards_Insert_Input[] = []
    editingCards.forEach((card, index) => {
      cardList.push({
        card: {
          data: {
            mark: card.mark,
            num: card.num,
          },
          on_conflict: {
            constraint: Cards_Constraint.CardsNumMarkKey,
            update_columns: [Cards_Update_Column.Mark, Cards_Update_Column.Num],
          },
        },
        order: index,
      })
    })
    createHandsMutation({
      variables: {
        object: {
          title: editingTitle,
          user_id: 'user5',
          es: editingES,
          content: editingContent,
          pots: {
            data: [
              { size: editingPot[0], street: 0 },
              { size: editingPot[1], street: 1 },
              { size: editingPot[2], street: 2 },
            ],
            on_conflict: {
              constraint: Pots_Constraint.PotsHandIdStreetKey,
              update_columns: [
                Pots_Update_Column.Size,
                Pots_Update_Column.Street,
              ],
            },
          },
          actions: {
            data: actionList,
          },
          hands_cards: {
            data: cardList,
            on_conflict: {
              constraint: Hands_Cards_Constraint.HandsCardsHandIdCardIdOrderKey,
              update_columns: [Hands_Cards_Update_Column.Order],
            },
          },
        },
      },
    })
  }
  return (
    <Layout title="編集">
      <div className=" flex flex-col mx-32">
        {loading && <p>loading</p>}
        {data && (
          <div>
            <div className="flex">
              <div className="text-3xl px-3">{editingTitle} </div>
              <Button onClick={onClickSave}>保存</Button>
            </div>
            <ActionTable />
            <Space h="md" />
            <DraftJSEditor />
            {/* <p>{hand?.hands_by_pk?.content}</p> */}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Edit
