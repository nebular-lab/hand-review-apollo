import { FC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GetAllHandsQuery, useGetAllHandsQuery } from 'types/generated/graphql'
import { GET_HANDS } from 'queries/queries'

const FetchMain: FC = () => {
  // TODO どっちがいいのか 動作は同じ？fetchPolicyが設定出来ないだけ？

  // const { data, error } = useQuery<GetAllHandsQuery>(GET_HANDS, {
  //   fetchPolicy: 'cache-and-network',
  // })
  const { data, error } = useGetAllHandsQuery()

  if (error) return <p>Error: {error.message}</p>
  return (
    <div title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>

      {data?.hands.map((hand, index) => {
        console.log(hand)
        return (
          <div key={index}>
            <Link href={`/hands/${hand.id}`}>
              <button className="text-red-500">個別ページ</button>
            </Link>
            <p>{hand.title}</p>
            <p>{hand.content}</p>
            <p>{hand.id}</p>
          </div>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </div>
  )
}
export default FetchMain
