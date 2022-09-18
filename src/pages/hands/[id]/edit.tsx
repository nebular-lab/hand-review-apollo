import { useQuery, useReactiveVar } from '@apollo/client'
import { editingReviewVar } from 'cache'
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
import React, { FC } from 'react'
import {
  GetAllHandIDsQuery,
  GetAllHandsQuery,
  GetHandByIdQuery,
  Hands,
} from 'types/generated/graphql'
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

const OneHand: FC = () => {
  const editingReview = useReactiveVar(editingReviewVar)
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  const { data, error, loading } = useQuery<GetHandByIdQuery>(GET_HAND_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  })
  if (loading) return <>loading</>
  console.log('error', error)
  console.log('data', data)

  if (data) {
    editingReviewVar(data)
  }
  const hand = editingReview
  return (
    <Layout title="編集">
      <div className="w-screen flex-col px-72">
        <div className="mt-8 flex justify-between gap-3 px-6">
          <ActionTable />
        </div>
        <p>{hand?.hands_by_pk?.title}</p>
        <p>{hand?.hands_by_pk?.content}</p>

        {hand?.hands_by_pk?.street_infos.map((street_info, index) => {
          return (
            <div key={street_info.id}>
              <div>{street_info.es}</div>
              <div>{street_info.stack}</div>
              {street_info.actions.map((action) => {
                return (
                  <div key={action.id}>
                    <div>{action.move}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default OneHand
