import React, { FC, memo, useEffect, useState } from 'react'
import { CardInterface } from 'types/localTypes/types'

const Card = memo(
  ({
    card,
    onClick,
    isSelectedProps = false,
    isCursor = false,
  }: {
    card: CardInterface
    onClick?: () => void
    isSelectedProps?: boolean
    isCursor?: boolean
  }) => {
    const [isSelected, setIsSelected] = useState(isSelectedProps)
    const [selectedBorderStyle, setSelectedBorderStyle] = useState('')
    let cursorStyle = ''
    if (isCursor) cursorStyle = 'cursor-pointer'
    useEffect(() => {
      if (isSelected) {
        setSelectedBorderStyle('border-2 border-purple-400')
      } else {
        setSelectedBorderStyle('')
      }
    }, [selectedBorderStyle])
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
      case 'w':
        bg = 'bg-gray-300'
        break
      default:
        console.log('カードの色入力にエラー')
    }

    return (
      <>
        {card.mark !== 'w' ? (
          <div
            className={`${bg} text-white rounded-sm h-9 w-6 justify-center flex items-center text-xl shadow-md  ${selectedBorderStyle} ${cursorStyle}`}
            onClick={onClick}
          >
            {card.num}
          </div>
        ) : (
          <div
            className={`${bg} text-white rounded-sm h-9 w-6 justify-center flex items-center text-xl shadow-md ${selectedBorderStyle} ${cursorStyle}`}
            onClick={onClick}
          ></div>
        )}
      </>
    )
  }
)

Card.displayName = 'Card'

export default Card
