import React, { FC } from 'react'

export interface CardType {
  num: string
  mark: string
}

const Card = ({ card, onClick }: { card: CardType; onClick?: () => void }) => {
  let bg
  switch (card.mark) {
    case 'h':
      bg = 'bg-red-500'
      break
    case 'c':
      bg = 'bg-green-500'
      break
    case 'd':
      bg = 'bg-blue-500'
      break
    case 's':
      bg = 'bg-gray-600'
      break
    default:
      console.log('カードの色入力にエラー')
  }
  return (
    <div
      className={`${bg} text-white rounded-sm h-9 w-6 justify-center flex items-center text-xl shadow-md`}
      onClick={onClick}
    >
      {card.num}
    </div>
  )
}

export default Card
