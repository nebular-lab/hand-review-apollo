import { useReactiveVar } from '@apollo/client'
import {
  Box,
  Button,
  Grid,
  Group,
  NumberInput,
  Space,
  TextInput,
} from '@mantine/core'
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
    // TODO pot自動計算
    // if (street === 0 && (move === 'call' || move === 'check')) {
    //   let betted = [0.5, 1.0, 0, 0, 0, 0]
    //   let Pot = 1.5
    //   let raiserSize=1.0
    //   let chipForCall = 1.0
    //   editingActions[street].forEach((action) => {
    //     if (action.move === 'raise') {
    //       Pot += action.size
    //       raiserSize=action.size
    //     }
    //     if (action.move === 'call') {
    //       nowPot
    //     }
    //   })
    // }
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
    <Grid
      columns={24}
      className="shadow-md bg-white justify-start items-center m-1"
    >
      {streetIndex === 0 ? (
        <>
          <Grid.Col span={1}>{'ES'}</Grid.Col>
          <Grid.Col span={2}>
            {' '}
            <NumberInput
              hideControls
              value={editingES}
              onChange={(value) => {
                if (value) setEditingES(value)
                else setEditingES(0)
              }}
            />
          </Grid.Col>

          <Grid.Col span={2}></Grid.Col>
        </>
      ) : (
        <>
          <Grid.Col span={1}>{'POT'}</Grid.Col>
          <Grid.Col span={2}>
            <NumberInput
              hideControls
              value={editingPot[streetIndex - 1]}
              onChange={(value) => {
                const _editingPot = _.cloneDeep(editingPot)
                if (value) {
                  _editingPot[streetIndex - 1] = value
                  setEditingPot(_editingPot)
                } else setEditingES(0)
              }}
            />
          </Grid.Col>

          <Grid.Col span={2} className="flex gap-1">
            {editingCards.map((card, index) => {
              if (
                (streetIndex === 1 &&
                  (index === 0 || index === 1 || index === 2)) ||
                (streetIndex === 2 && index === 3) ||
                (streetIndex === 3 && index === 4)
              ) {
                return (
                  <Card
                    key={index}
                    card={{
                      num: card.num,
                      mark: card.mark,
                    }}
                    isCursor={true}
                    onClick={() => setIsOpenCardSetter(true)}
                  />
                )
              }
            })}
          </Grid.Col>
        </>
      )}

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
  )
}

export default StreetAction
