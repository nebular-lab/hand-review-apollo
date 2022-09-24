import { FC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import {
  GetAllHandsDocument,
  GetAllHandsQuery,
  useGetAllHandsQuery,
} from 'types/generated/graphql'

import { Layout } from 'components/template/Layout'
import { Button, Space } from '@mantine/core'
import { NextLink } from '@mantine/next'
import HandTicket from 'components/molecule/HandTicket'
import { CardInterface } from 'types/localTypes/types'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { initializeApollo } from 'lib/apolloClient'
import { Hands } from 'types/generated/graphql'
type Props = {
  hands: Hands[]
}
export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetAllHandsQuery>({
    query: GetAllHandsDocument,
  })
  return {
    props: {
      hands: data.hands,
    },
  }
}

const hands: NextPage<Props> = ({ hands }) => {
  // TODO どっちがいいのか 動作は同じ？fetchPolicyが設定出来ないだけ？

  // const { data, error } = useQuery<GetAllHandsQuery>(GET_HANDS, {
  //   fetchPolicy: 'cache-and-network',
  // })
  // const { data, loading, error } = useGetAllHandsQuery({
  //   fetchPolicy: 'cache-and-network',
  // })

  return (
    <Layout title="ハンド一覧">
      {/* {loading && <p>loading</p>}
      {error && <p>Error: {error.message}</p>} */}
      <p className="mb-6 font-bold text-3xl">ハンド一覧</p>
      <div className="grid grid-cols-4">
        {hands.map((hand, index) => {
          const cardList: CardInterface[] = []
          hand.hands_cards.map((card, index) => {
            cardList.push({ num: card.card.num, mark: card.card.mark })
          })
          return (
            <Link href={`/hands/${hand.id}`} key={index}>
              <a className="no-underline">
                <HandTicket
                  cards={cardList}
                  user={hand.user_id}
                  title={hand.title}
                />
              </a>
            </Link>
          )
        })}
      </div>
      <Space h={20} />
      <Button component={NextLink} href="/">
        homeへ
      </Button>
    </Layout>
  )
}
export default hands
