import Card from 'components/atom/Card'
import Link from 'next/link'
import React from 'react'
import { CardInterface } from 'types/localTypes/types'

const HandTicket = ({
  cards,
  user,
  title,
}: {
  cards: CardInterface[]
  user: string
  title: string
}) => {
  return (
    <div className="w-72 h-72 rounded-xl shadow-md text-gray-600">
      <div className="bg-teal-100 h-[50%] rounded-t-xl"></div>
      <div className="bg-white h-[50%] p-5 rounded-b-xl flex flex-col">
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
