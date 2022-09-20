import { useReactiveVar } from '@apollo/client'
import { Button, Grid } from '@mantine/core'
// import { isOpenNumSetterVar, numVar, selectedCardVar } from 'cache'
import Num from 'components/atom/Num'
import _ from 'lodash'
import React from 'react'
import { useRecoilState } from 'recoil'
import {
  editingActionsState,
  editingCardsState,
  editingReviewState,
  isOpenCardSetterState,
  isOpenNumSetterState,
  selectedActionState,
  settedNumState,
} from 'store/stores'

const NumSetter = () => {
  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  // const settedNum = useReactiveVar(numVar)
  // const selectedCard = useReactiveVar(selectedCardVar)
  // const editingReview = useReactiveVar(editingReviewVar)
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
  const [settedNum, setSettedNum] = useRecoilState(settedNumState)
  // const [editingReview, setEditingReview] = useRecoilState(editingReviewState)
  return (
    <Grid>
      {nums.map((num) => {
        return (
          <Grid.Col key={num} span={4}>
            <Num num={num} />
          </Grid.Col>
        )
      })}
      <Grid.Col span={8} className="text-2xl">
        {settedNum}
      </Grid.Col>

      <Grid.Col span={6}>
        <Button
          onClick={() => {
            setSettedNum(0)
          }}
        >
          リセット
        </Button>
      </Grid.Col>
      <Grid.Col span={6}>
        <Button
          onClick={() => {
            const _editingActions = _.cloneDeep(editingActions)
            _editingActions[selectedAction.street][selectedAction.order].size =
              settedNum
            setIsOpenNumSetter(false)
            setEditingActions(_editingActions)
            setSettedNum(0)
          }}
        >
          決定
        </Button>
      </Grid.Col>
    </Grid>
  )
}

export default NumSetter
