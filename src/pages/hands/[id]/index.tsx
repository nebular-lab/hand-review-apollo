import { useQuery } from '@apollo/client'
import { Button } from '@mantine/core'
import { NextLink } from '@mantine/next'
import { validate } from 'graphql'
import { initializeApollo } from 'lib/apolloClient'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { GET_HAND_BY_ID, GET_HAND_IDS } from 'queries/queries'
import React, { useState } from 'react'
import {
  GetAllHandIDsQuery,
  GetHandByIdQuery,
  Hands,
} from 'types/generated/graphql'
type Props = {
  hand: Hands
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetAllHandIDsQuery>({
    query: GET_HAND_IDS,
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
      query: GET_HAND_BY_ID,
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

  return (
    <div>
      個別ページ
      <Button component={NextLink} href={`/hands/${hand.id}/edit`}></Button>
      <p>{hand.title}</p>
      <p>{hand.content}</p>
    </div>
  )
}

export default OneHand
