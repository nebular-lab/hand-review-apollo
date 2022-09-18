import { useReactiveVar } from '@apollo/client'
import { Button, Grid, Group, Space } from '@mantine/core'
import { editingReviewVar, isOpenCardSetterVar } from 'cache'
import Action, { ActionType } from 'components/atom/Action'
import Card, { CardType } from 'components/atom/Card'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
export type StreetIndexType = 0 | 1 | 2 | 3

const StreetAction = ({ streetIndex }: { streetIndex: StreetIndexType }) => {
  const isOpenCardSetter = useReactiveVar(isOpenCardSetterVar)
  const editingReview = useReactiveVar(editingReviewVar)
  const streetAction = editingReview.hands_by_pk?.street_infos[streetIndex]
  return (
    <div>
      <div className=" flex h-14 items-center justify-start gap-3 rounded-sm bg-white px-2 shadow-md">
        <div className="w-28 text-center text-xl">
          {streetAction?.es && <div>{`ES ${streetAction.es}BB`}</div>}
          {streetAction?.stack && <div>{`${streetAction.stack}BB`}</div>}
          {/* {SPR && <div>{`SPR ${SPR}`}</div>} */}
        </div>
        <div className="flex w-20 gap-1">
          {streetAction?.street_info_cards.map((cardData, index) => (
            <Card
              key={index}
              card={{ num: cardData.card.num, mark: cardData.card.mark }}
            />
          ))}
        </div>

        <Button onClick={() => isOpenCardSetterVar(true)}>
          <FaRegEdit />
        </Button>
        <Space />
        <Grid>
          {streetAction?.actions.map((action, index) => {
            return (
              <>
                {action.size ? (
                  <Action
                    key={index}
                    position={action.position}
                    move={action.move}
                    size={action.size}
                  />
                ) : (
                  <Action
                    key={index}
                    position={action.position}
                    move={action.move}
                  />
                )}
              </>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default StreetAction
