import { useQuery } from '@apollo/client'
import { Button, Space } from '@mantine/core'
import { NextLink } from '@mantine/next'
import Action, { ActionProps } from 'components/atom/Action'
import DraftJSEditor from 'components/molecule/DraftJSEditor'
import StreetAction from 'components/molecule/StreetAction'
import ActionTable from 'components/organism/ActionTable'
import { Layout } from 'components/template/Layout'
import { validate } from 'graphql'
import { initializeApollo } from 'lib/apolloClient'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import { GET_HAND_BY_ID, GET_HAND_IDS } from 'queries/queries'
import React, { useState } from 'react'
import {
  GetAllHandIDsDocument,
  GetAllHandIDsQuery,
  GetHandByIdDocument,
  GetHandByIdQuery,
  Hands,
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
  if (!hand) {
    return <div>Loading...</div>
  }
  const title = hand.title
  const content = hand.content
  const potList: number[] = []
  hand.pots.forEach((pot) => {
    potList.push(pot.size)
  })
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
  const cardList: CardInterface[] = []
  hand.hands_cards.forEach((card) => {
    cardList.push({ num: card.card.num, mark: card.card.mark })
  })

  return (
    <Layout title={title}>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-3xl">{title}</p>
          <Button
            component={NextLink}
            href={`/hands/${hand.id}/edit`}
            className="w-28"
          >
            編集
          </Button>
        </div>
        <div className="flex-col">
          {/* preflop ~ river */}
          {actionsList.map((StreetAction, index) => {
            return StreetAction.map((action) => {
              return (
                <Action
                  key={index}
                  position={action.position}
                  move={action.move}
                  size={action.size}
                  street={index}
                  order={action.order}
                />
              )
            })
          })}
        </div>
        <Space h="md" />
        <DraftJSEditor />
        <p>{hand.content}</p>
      </div>
    </Layout>
  )
}

export default OneHand
