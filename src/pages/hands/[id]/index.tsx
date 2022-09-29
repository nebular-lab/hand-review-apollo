import { useQuery } from '@apollo/client'
import { Button, Space } from '@mantine/core'
import { NextLink } from '@mantine/next'
import Action, { ActionProps } from 'components/atom/Action'
import DraftJSEditor from 'components/molecule/DraftJSEditor'
import StreetAction from 'components/organism/StreetAction'
import ActionTable from 'components/organism/ActionTable'
import { Layout } from 'components/template/Layout'
import { validate } from 'graphql'
import { initializeApollo } from 'lib/apolloClient'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import { GET_HAND_BY_ID, GET_HAND_IDS } from 'queries/queries'
import React, { useEffect, useState } from 'react'
import {
  GetAllHandIDsDocument,
  GetAllHandIDsQuery,
  GetHandByIdDocument,
  GetHandByIdQuery,
  Hands,
  useDeleteHandsMutation,
  useGetHandByIdQuery,
} from 'types/generated/graphql'
import { ActionInterface, CardInterface } from 'types/localTypes/types'
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
import { useRouter } from 'next/router'
type Props = {
  hand: Hands
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetAllHandIDsQuery>({
    query: GetAllHandIDsDocument,
  })
  console.log('getStaticPaths', data)
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

const OneHand: NextPage<Props> = ({ hand }) => {
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
  const { data, error, loading } = useGetHandByIdQuery({
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  })
  useEffect(() => {
    setIsData(!loading)
  }, [loading])
  useEffect(() => {
    if (data?.hands_by_pk) {
      setEditingHandId(data.hands_by_pk.id)
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
        {loading && <p>loading</p>}
        {data && (
          <div>
            <div className="flex">
              <div className="text-3xl px-3">{editingTitle} </div>
              <Button component={NextLink} href={`/hands/${hand.id}/edit`}>
                編集
              </Button>
              <Button onClick={onClickDelete}>削除</Button>
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

export default OneHand
