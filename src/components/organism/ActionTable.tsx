import { useReactiveVar } from '@apollo/client'
import { Button, Modal, Space } from '@mantine/core'
import CardList from 'components/molecule/CardList'
import NumSetter from 'components/molecule/NumSetter'
import React, { FC, useState } from 'react'
import { useRecoilState } from 'recoil'
import {
  editingReviewState,
  isOpenCardSetterState,
  isOpenNumSetterState,
} from 'store/stores'
import StreetAction from './StreetAction'

type Props = {
  canEdit: boolean
}

const ActionTable: FC<Props> = (props) => {
  const { canEdit } = props
  const [isOpenCardSetter, setIsOpenCardSetter] = useRecoilState(
    isOpenCardSetterState
  )
  const [isOpenNumSetter, setIsOpenNumSetter] =
    useRecoilState(isOpenNumSetterState)

  return (
    <div className=" flex flex-col gap-0.5">
      {/* preflop ~ river */}
      <StreetAction streetIndex={0} />

      <StreetAction streetIndex={1} />

      <StreetAction streetIndex={2} />

      <StreetAction streetIndex={3} />
      {canEdit && (
        <>
          <Modal
            opened={isOpenCardSetter}
            onClose={() => setIsOpenCardSetter(false)}
          >
            <CardList />
          </Modal>
          <Modal
            opened={isOpenNumSetter}
            onClose={() => setIsOpenNumSetter(false)}
          >
            <NumSetter />
          </Modal>
        </>
      )}
    </div>
  )
}

export default ActionTable
