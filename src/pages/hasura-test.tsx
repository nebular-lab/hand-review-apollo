import { FC, useEffect } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GetAllHandIDsQuery, GetAllHandsQuery } from 'types/generated/graphql'
import { GET_HANDS_LOCAL, GET_HAND_BY_ID, GET_HAND_IDS } from 'queries/queries'
import { initializeApollo } from 'lib/apolloClient'

const FetchMain: FC = () => {
  const apolloClient = initializeApollo()
  const fetchData = async () => {
    const { data } = await apolloClient.query<GetAllHandIDsQuery>({
      query: GET_HAND_IDS,
    })
    return data.hands
  }
  fetchData().then((value) => {
    console.log(value)
    return (
      <>
        {value.map((hand, index) => {
          return <p key={index}>{hand.id}</p>
        })}
      </>
    )
  })
  return <>エラー</>
}
export default FetchMain
