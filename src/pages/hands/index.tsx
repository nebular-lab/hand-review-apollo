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
  const { data, error } = await apolloClient.query<GetAllHandsQuery>({
    query: GetAllHandsDocument,
  })
  console.log(data)
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
      {hands.length === 0 && (
        <p>現在閲覧可能なハンドレビューはありません。新規作成してください。</p>
      )}
      <div className="grid grid-cols-4 gap-3">
        {hands.map((hand, index) => {
          const cardList: CardInterface[] = []
          hand.hands_cards.map((card, index) => {
            cardList.push({ num: card.card.num, mark: card.card.mark })
          })
          let xPotCount = 1
          const positionsSet = new Set<number>([])
          hand.actions.forEach((action) => {
            if (
              action.street === 0 &&
              (action.move === 'raise' || action.move === 'allin')
            ) {
              xPotCount += 1
            }
            if (action.street === 0) {
              positionsSet.add(action.position)
              if (action.move === 'fold') {
                positionsSet.delete(action.position)
              }
            }
          })
          const posNum = [...positionsSet]
          posNum.sort()
          const posList = [
            { str: 'UTG', num: 3 },
            { str: 'HJ', num: 2 },
            { str: 'CO', num: 1 },
            { str: 'BTN', num: 0 },
            { str: 'SB', num: 9 },
            { str: 'BB', num: 8 },
            { str: '---', num: 10 },
          ]
          const posStr: string[] = []
          posNum.forEach((pos) => {
            posList.forEach((setPos) => {
              if (pos === setPos.num) {
                posStr.push(setPos.str)
              }
            })
          })
          return (
            <Link href={`/hands/${hand.id}`} key={index}>
              <a className="no-underline">
                <HandTicket
                  positions={posStr}
                  xPot={xPotCount}
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
    </Layout>
  )
}
export default hands
