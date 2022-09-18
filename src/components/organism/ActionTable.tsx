import { useReactiveVar } from '@apollo/client'
import { Button, Modal } from '@mantine/core'
import {
  editingReviewVar,
  isOpenCardSetterVar,
  isOpenNumSetterVar,
} from 'cache'
import CardList from 'components/molecule/CardList'
import NumSetter from 'components/molecule/NumSetter'
import React, { useState } from 'react'
import StreetAction from '../molecule/StreetAction'

const ActionTable = () => {
  const isOpenCardSetter = useReactiveVar(isOpenCardSetterVar)
  const isOpenNumSetter = useReactiveVar(isOpenNumSetterVar)
  const editingReview = useReactiveVar(editingReviewVar)
  // const streets:Street[]=["preflop","flop","turn","river"]
  return (
    <div className="flex-col">
      <Modal
        opened={isOpenCardSetter}
        onClose={() => isOpenCardSetterVar(false)}
      >
        <CardList />
      </Modal>
      <Modal
        opened={isOpenNumSetter}
        onClose={() => isOpenNumSetterVar(false)}
        title="Introduce yourself!"
      >
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
