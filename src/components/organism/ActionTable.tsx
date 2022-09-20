import { useReactiveVar } from '@apollo/client'
import { Button, Modal, Space } from '@mantine/core'
import CardList from 'components/molecule/CardList'
import NumSetter from 'components/molecule/NumSetter'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  editingReviewState,
  isOpenCardSetterState,
  isOpenNumSetterState,
} from 'store/stores'
import StreetAction from '../molecule/StreetAction'

const ActionTable = () => {
  const [isOpenCardSetter, setIsOpenCardSetter] = useRecoilState(
    isOpenCardSetterState
  )
  const [isOpenNumSetter, setIsOpenNumSetter] =
    useRecoilState(isOpenNumSetterState)

  //const editingReview = useReactiveVar(editingReviewVar)

  return (
    <div className="flex-col">
      <Modal
        opened={isOpenCardSetter}
        onClose={() => setIsOpenCardSetter(false)}
      >
        <CardList />
      </Modal>
      <Modal opened={isOpenNumSetter} onClose={() => setIsOpenNumSetter(false)}>
        <NumSetter />
      </Modal>
      {/* preflop ~ river */}

      <StreetAction streetIndex={0} />

      <StreetAction streetIndex={1} />

      <StreetAction streetIndex={2} />

      <StreetAction streetIndex={3} />
    </div>
  )
}

export default ActionTable
