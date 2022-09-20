import { useQuery } from '@apollo/client'
import { Button, Space } from '@mantine/core'
import { NextLink } from '@mantine/next'
import DraftJSEditor from 'components/molecule/DraftJSEditor'
import ActionTable from 'components/organism/ActionTable'
import { Layout } from 'components/template/Layout'
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
    <Layout title={hand.title}>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-3xl">{hand.title}</p>
          <Button
            component={NextLink}
            href={`/hands/${hand.id}/edit`}
            className="w-28"
          >
            編集
          </Button>
        </div>

        {/* <ActionTable /> */}
        <Space h="md" />
        <DraftJSEditor />
        <p>{hand.content}</p>
      </div>
    </Layout>
  )
}

export default OneHand
