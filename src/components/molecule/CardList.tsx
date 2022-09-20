import { Grid } from '@mantine/core'
import Card from 'components/atom/Card'
import _ from 'lodash'
import React, { memo } from 'react'
import { useRecoilState } from 'recoil'
import { editingCardsState } from 'store/stores'

const CardList = memo(() => {
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  const numList: string[] = [
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
  const markList: string[] = ['s', 'h', 'd', 'c']

  const onClickCardSelect = () => {}
  return (
    <>
      <div className="flex gap-1">
        {editingCards.map((card, index) => (
          <Card
            key={index}
            card={{ num: card.num, mark: card.mark }}
            isCursor={true}
            onClick={() => {
              const _editingCards = _.cloneDeep(editingCards)
              _editingCards[index].mark = 'w'
              _editingCards[index].num = 'w'
              setEditingCards(_editingCards)
            }}
          />
        ))}
      </div>
      <div className="h-3"></div>
      {markList.map((mark, index) => {
        return (
          <div key={index} className="flex gap-px">
            {numList
              .slice(0)
              .reverse()
              .map((num) => {
                return (
                  <Card
                    key={`${mark}${num}`}
                    card={{ num: num, mark: mark }}
                    isCursor={true}
                    onClick={() => {
                      let flag = true
                      const _editingCards = editingCards.map((card) => {
                        if (card.mark === 'w' && flag) {
                          console.log('set')
                          flag = false
                          return { num: num, mark: mark }
                        } else {
                          return card
                        }
                      })
                      console.log(_editingCards)
                      setEditingCards(_editingCards)
                    }}
                  />
                )
              })}
          </div>
        )
      })}
    </>
  )
})

CardList.displayName = 'CardList'

export default CardList
