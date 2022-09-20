import { useQuery, useReactiveVar } from '@apollo/client'
import { Space } from '@mantine/core'
import DraftJSEditor from 'components/molecule/DraftJSEditor'
// import { editingReviewVar } from 'cache'
import ActionTable from 'components/organism/ActionTable'
import { Layout } from 'components/template/Layout'
import { validate } from 'graphql'
import { initializeApollo } from 'lib/apolloClient'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import {
  GET_HANDS_LOCAL,
  GET_HAND_BY_ID,
  GET_HAND_BY_ID_LOCAL,
  GET_HAND_IDS,
} from 'queries/queries'
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
  GetAllHandIDsQuery,
  GetAllHandsQuery,
  GetHandByIdQuery,
  Hands,
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
  const { data, error, loading } = useQuery<GetHandByIdQuery>(GET_HAND_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  })
  useEffect(() => {
    setIsData(!loading)
  }, [loading])
  useEffect(() => {
    if (data?.hands_by_pk) {
      const cardList: CardInterface[] = []
      const cardListSetter = [
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [3, 0],
      ]
      for (let i = 0; i <= 4; i++) {
        cardList[i] = {
          num: data.hands_by_pk?.hands_cards[i].card.num,
          mark: data.hands_by_pk?.hands_cards[i].card.mark,
        }
      }
      setEditingCards(cardList)

      const actionsList: ActionInterface[][] = [[], [], [], []]
      for (let i = 0; i <= 3; i++) {
        if (data.hands_by_pk?.street_infos[i] != null)
          data.hands_by_pk?.street_infos[i].actions.map((action) => {
            actionsList[i].push({
              move: action.move,
              size: action.size,
              position: action.position,
              order: action.order,
              street: i,
            })
          })
      }
      setEditingActions(actionsList)
      setEditingTitle(data.hands_by_pk?.title)
      setEditingContent(data.hands_by_pk?.content)
      setEditingES(data.hands_by_pk?.es)
      const PotList: number[] = [0, 0, 0]
      for (let i = 0; i <= 2; i++) {
        if (data.hands_by_pk.pots[i] != null) {
          PotList[i] = data.hands_by_pk.pots[i].size
        }
      }
      setEditingPot(PotList)
      setEditingReview(data)
    }
  }, [data])

  return (
    <Layout title="編集">
      <div className=" flex flex-col mx-32">
        {loading && <p>loading</p>}
        {data && (
          <>
            <div className="text-3xl px-3">{editingTitle} </div>
            <ActionTable />
            <Space h="md" />
            <DraftJSEditor />
            {/* <p>{hand?.hands_by_pk?.content}</p> */}
          </>
        )}
      </div>
    </Layout>
  )
}

export default Edit
