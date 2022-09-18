import { Grid } from '@mantine/core'
import Card, { CardMark, CardNum, CardType } from 'components/atom/Card'
import React from 'react'

const CardList = () => {
  const numList: CardNum[] = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T',
    'J',
    'Q',
    'K',
    'A',
  ]
  const markList: CardMark[] = ['s', 'h', 'd', 'c']

  return (
    <>
      {markList.map((mark, index) => {
        return (
          <div key={index} className="flex gap-px">
            {numList
              .slice(0)
              .reverse()
              .map((num) => {
                return (
                  <Card key={`${mark}${num}`} card={{ num: num, mark: mark }} />
                )
              })}
          </div>
        )
      })}
    </>
  )
}

export default CardList
