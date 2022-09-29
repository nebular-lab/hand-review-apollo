import { useQuery, useReactiveVar } from '@apollo/client'
import { Button, Space, TextInput } from '@mantine/core'
import { NextLink } from '@mantine/next'
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
  editingHandIdState,
  editingPotState,
  editingReviewState,
  editingTitleState,
  isDataState,
} from 'store/stores'
import {
  Actions_Constraint,
  Actions_Insert_Input,
  Actions_Update_Column,
  Cards_Constraint,
  Cards_Insert_Input,
  Cards_Update_Column,
  GetAllHandIDsDocument,
  GetAllHandIDsQuery,
  GetAllHandsQuery,
  GetHandByIdDocument,
  GetHandByIdQuery,
  Hands,
  Hands_Cards_Constraint,
  Hands_Cards_Insert_Input,
  Hands_Cards_Update_Column,
  Hands_Constraint,
  Hands_Update_Column,
  Pots_Constraint,
  Pots_Insert_Input,
  Pots_Update_Column,
  useCreateHandsMutation,
  useDeleteHandsMutation,
  useGetHandByIdQuery,
  useUpdateHandsMutation,
} from 'types/generated/graphql'
import { ActionInterface, CardInterface } from 'types/localTypes/types'
type Props = {
  hand: Hands
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetAllHandIDsQuery>({
    query: GetAllHandIDsDocument,
  })
  console.log('getStaticPaths', data.hands)
  const paths = data.hands.map((hand) => ({
    params: {
      id: hand.id,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()
  if (params && params.id) {
    const { data } = await apolloClient.query<GetHandByIdQuery>({
      query: GetHandByIdDocument,
      variables: { id: params.id },
    })
    return {
      props: {
        hand: data.hands_by_pk,
      },
      revalidate: 1,
    }
  }
  return { props: { hand: 1 } }
}

const Edit: NextPage<Props> = ({ hand }) => {
  //const editingReview = useReactiveVar(editingReviewVar)
  const [editingHandId, setEditingHandId] = useRecoilState(editingHandIdState)
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
  // const { data, error, loading } = useGetHandByIdQuery({
  //   fetchPolicy: 'cache-and-network',
  //   variables: { id: id },
  // })
  // useEffect(() => {
  //   setIsData(!loading)
  // }, [loading])
  useEffect(() => {
    if (hand) {
      setEditingHandId(hand.id)
      const cardList: CardInterface[] = []
      hand.hands_cards.forEach((card) => {
        cardList.push({ num: card.card.num, mark: card.card.mark })
      })
      setEditingCards(cardList)

      const actionsList: ActionInterface[][] = [[], [], [], []]
      for (let i = 0; i <= 3; i++) {
        hand.actions.forEach((action) => {
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
      setEditingTitle(hand.title)
      setEditingContent(hand.content)
      setEditingES(hand.es)
      const PotList: number[] = []
      hand.pots.forEach((pot) => {
        PotList.push(pot.size)
      })
      setEditingPot(PotList)
      // setEditingReview(hand)
    }
  }, [hand])

  const [updateHandMutation] = useUpdateHandsMutation()
  const onClickUpdate = () => {
    const actionList: Actions_Insert_Input[] = []
    editingActions.forEach((street) => {
      street.forEach((action) => {
        actionList.push({
          hand_id: editingHandId,
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
        hand_id: editingHandId,
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
    const potList: Pots_Insert_Input[] = []
    editingPot.forEach((pot, index) => {
      potList.push({
        hand_id: editingHandId,
        size: pot,
        street: index,
      })
    })
    updateHandMutation({
      variables: {
        id: editingHandId,
        handObj: {
          title: editingTitle,
          es: editingES,
          content: editingContent,
        },
        potObj: potList,
        actionsObj: actionList,
        handsCardsObj: cardList,
      },
    }).then(() => router.push('/hands'))
  }
  const [deleteHandMutation] = useDeleteHandsMutation()
  const onClickDelete = () => {
    deleteHandMutation({
      variables: {
        id: editingHandId,
      },
    }).then(() => router.push('/hands'))
  }
  return (
    <Layout title="編集">
      <div className=" flex flex-col">
        {hand && (
          <div>
            <div className="flex justify-between ">
              <TextInput
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              <div className="flex gap-2">
                <Button onClick={onClickUpdate} className="shadow-md">
                  更新
                </Button>
                <Button onClick={onClickDelete} className="shadow-md">
                  削除
                </Button>
              </div>
            </div>
            <ActionTable canEdit={true} />
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
