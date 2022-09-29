import React, { FC } from 'react'
type Props = {
  text: string
  style?: string
  onClick?: () => void
}
const DropDownItem: FC<Props> = (props) => {
  const { text, style, onClick } = props
  return (
    <div className={style} onClick={onClick}>
      {text}
    </div>
  )
}

export default DropDownItem
