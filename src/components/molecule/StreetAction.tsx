import { useReactiveVar } from '@apollo/client'
import { Button, Grid, Group, Space } from '@mantine/core'
// import { isOpenCardSetterVar, isOpenNumSetterVar, selectedCardVar } from 'cache'
import Action, { ActionProps } from 'components/atom/Action'
import Card from 'components/atom/Card'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import {
  editingActionsState,
  editingCardsState,
  editingContentState,
  editingESState,
  editingPotState,
  editingReviewState,
  editingTitleState,
  isDataState,
  isOpenCardSetterState,
  isOpenNumSetterState,
  selectedActionState,
} from 'store/stores'
import { ActionInterface } from 'types/localTypes/types'
export type StreetIndexType = 0 | 1 | 2 | 3

const StreetAction = ({ streetIndex }: { streetIndex: StreetIndexType }) => {
  const [editingReview, setEditingReview] = useRecoilState(editingReviewState)
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  const [selectedAction, setSelectedAction] =
    useRecoilState(selectedActionState)
  const [isOpenNumSetter, setIsOpenNumSetter] =
    useRecoilState(isOpenNumSetterState)
  const [isOpenCardSetter, setIsOpenCardSetter] = useRecoilState(
    isOpenCardSetterState
  )
  const [editingES, setEditingES] = useRecoilState(editingESState)
  const [editingPot, setEditingPot] = useRecoilState(editingPotState)
  const [editingTitle, setEditingTitle] = useRecoilState(editingTitleState)
  const [editingContent, setEditingContent] =
    useRecoilState(editingContentState)
  const [isData, setIsData] = useRecoilState(isDataState)

  const onClickPos = (pos: number, street: number, order: number) => {
    const _editingActions = _.cloneDeep(editingActions)

    _editingActions[street][order].position = pos
    setEditingActions(_editingActions)
  }
  const onClickPosAdd = (pos: number, street: number, order: number) => {
    const _editingActions = _.cloneDeep(editingActions)
    console.log(_editingActions)
    if (
      _editingActions[street].length === 0 ||
      _editingActions[street].length == order
    ) {
      const newAction: ActionInterface = {
        position: pos,
        move: '---',
        size: 0,
        order: order,
        street: street,
      }
      _editingActions[street].push(newAction)
    } else {
      _editingActions[street][order].position = pos
    }
    setEditingActions(_editingActions)
  }

  const onClickMove = (move: string, street: number, order: number) => {
    const _editingActions = _.cloneDeep(editingActions)
    _editingActions[street][order].move = move
    setEditingActions(_editingActions)
    if (move === 'bet' || move === 'raise' || move === 'allin') {
      setSelectedAction({ street: street, order: order })
      setIsOpenNumSetter(true)
    }
  }

  const onClickMoveAdd = (move: string, street: number, order: number) => {
    const _editingActions = _.cloneDeep(editingActions)
    if (
      _editingActions[street].length === 0 ||
      _editingActions[street].length == order
    ) {
      const newAction: ActionInterface = {
        position: 10,
        move: move,
        size: 0,
        order: order,
        street: street,
      }
      _editingActions[street].push(newAction)
    } else {
      _editingActions[street][order].move = move
    }
    setEditingActions(_editingActions)
    if (move === 'bet' || move === 'raise' || move === 'allin') {
      setSelectedAction({ street: street, order: order })
      setIsOpenNumSetter(true)
    }
  }

  const onDoubleClick = (street: number, order: number) => {
    const _editingActions = _.cloneDeep(editingActions)
    if (_editingActions[street].length == order + 1) {
      _editingActions[street].pop()
      setEditingActions(_editingActions)
    }
  }

  useEffect(() => {
    console.log(editingActions)
  }, [editingActions])

  let actionOrder = -1
  return (
    <div>
      <div className=" flex h-14 items-center justify-start gap-3 rounded-sm bg-white px-10 shadow-md">
        <div>
          {streetIndex === 0 && (
            <div className="flex">
              <div className="w-28 text-center text-xl">{`ES ${editingES}BB`}</div>
              <div className="flex w-20 gap-1"></div>
            </div>
          )}
          {streetIndex === 1 && (
            <div className="flex">
              <div className="w-28 text-center text-xl">{` ${editingPot[0]}BB`}</div>
              <div className="flex w-20 gap-1">
                {editingCards[0] && (
                  <Card
                    card={{
                      num: editingCards[0].num,
                      mark: editingCards[0].mark,
                    }}
                    isCursor={true}
                    onClick={() => setIsOpenCardSetter(true)}
                  />
                )}
                {editingCards[1] && (
                  <Card
                    card={{
                      num: editingCards[1].num,
                      mark: editingCards[1].mark,
                    }}
                    isCursor={true}
                    onClick={() => setIsOpenCardSetter(true)}
                  />
                )}
                {editingCards[2] && (
                  <Card
                    card={{
                      num: editingCards[2].num,
                      mark: editingCards[2].mark,
                    }}
                    isCursor={true}
                    onClick={() => setIsOpenCardSetter(true)}
                  />
                )}
              </div>
            </div>
          )}
          {streetIndex === 2 && (
            <div className="flex">
              <div className="w-28 text-center text-xl">{` ${editingPot[1]}BB`}</div>
              <div className="flex w-20 gap-1">
                {editingCards[3] && (
                  <Card
                    card={{
                      num: editingCards[3].num,
                      mark: editingCards[3].mark,
                    }}
                    isCursor={true}
                    onClick={() => setIsOpenCardSetter(true)}
                  />
                )}
              </div>
            </div>
          )}
          {streetIndex === 3 && (
            <div className="flex">
              <div className="w-28 text-center text-xl">{` ${editingPot[2]}BB`}</div>
              <div className="flex w-20 gap-1">
                {editingCards[4] && (
                  <Card
                    card={{
                      num: editingCards[4].num,
                      mark: editingCards[4].mark,
                    }}
                    isCursor={true}
                    onClick={() => setIsOpenCardSetter(true)}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        <Space />
        <Grid>
          {isData &&
            editingActions[streetIndex].map((action, index) => {
              actionOrder = action.order
              return (
                <Action
                  key={index}
                  position={action.position}
                  move={action.move}
                  size={action.size}
                  street={streetIndex}
                  order={action.order}
                  onClickPos={onClickPos}
                  onClickMove={onClickMove}
                  onDoubleClick={onDoubleClick}
                />
              )
            })}
          <Action
            position={10}
            move={'---'}
            size={0}
            street={streetIndex}
            order={actionOrder + 1}
            onClickPos={onClickPosAdd}
            onClickMove={onClickMoveAdd}
            onDoubleClick={onDoubleClick}
          />
        </Grid>
      </div>
    </div>
  )
}

export default StreetAction
