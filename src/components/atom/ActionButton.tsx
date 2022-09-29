import { Button } from '@mantine/core'
import React, { FC } from 'react'

type Props = {
  style?: string
  text: string
  disabled?: boolean
  onClick?: () => void
  onDoubleClick?: (street: number, order: number) => void
}
const ActionButton: FC<Props> = (props) => {
  const { style, text, disabled = false, onClick, onDoubleClick } = props
  if (disabled)
    return (
      <Button className={style} onClick={onClick} >
        {text}
      </Button>
    )
  return (
    <Button className={style} onClick={onClick}>
      {text}
    </Button>
  )
}

export default ActionButton
