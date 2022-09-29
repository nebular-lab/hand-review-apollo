import Card from 'components/atom/Card'
import Link from 'next/link'
import React from 'react'
import { CardInterface } from 'types/localTypes/types'

const HandTicket = ({
  cards,
  user,
  title,
  xPot,
  positions,
}: {
  cards: CardInterface[]
  user: string
  title: string
  xPot: number
  positions: String[]
}) => {
  return (
    <div className="h-60 rounded-xl shadow-md text-gray-600">
      <div className="bg-teal-100 h-[20%] rounded-t-xl"></div>
      <div className="bg-white h-[80%] p-5 rounded-b-xl flex flex-col">
        <div>{`${xPot}betpot`}</div>
        <div className="flex">
          {positions.map((position, index) => (
            <div key={index}>{position}</div>
          ))}
        </div>
        <div className="flex gap-2 h-[50%]">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        <div>{title}</div>
        <div className="h-[50%]">{user}</div>
      </div>
    </div>
  )
}

export default HandTicket
