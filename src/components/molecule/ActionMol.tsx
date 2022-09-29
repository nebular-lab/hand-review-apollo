import { Grid, Menu } from '@mantine/core'
import ActionButton from 'components/atom/ActionButton'
import DropDownItem from 'components/atom/DropDownItem'
import _ from 'lodash'
import React, { FC, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { editingActionsState } from 'store/stores'

type Props = {
  pos: string
  move: string
  size: number
  disable?: boolean
  onDoubleClick?: () => void
  onClickPos?: () => void
  onClickMove?: () => void
}

const ActionMol: FC<Props> = (props) => {
  const { pos, move, size, disable } = props
  const [isSelected, setIsSelected] = useState(true)
  const [bg, setBgColor] = useState('gray')
  const [hoverBg, setHoverBg] = useState('hover:gray')
  useEffect(() => {
    switch (move) {
      case 'bet':
        setBgColor('bg-orange-400')
        setHoverBg('hover:bg-orange-500')
        break
      case 'fold':
        setBgColor('bg-gray-500')
        setHoverBg('hover:bg-gray-600')
        break
      case 'raise':
        setBgColor('bg-orange-400')
        setHoverBg('hover:bg-orange-500')
        break
      case 'call':
        setBgColor('bg-lime-500')
        setHoverBg('hover:bg-lime-600')
        break
      case 'check':
        setBgColor('bg-lime-500')
        setHoverBg('hover:bg-lime-600')
        break
      case 'allin':
        setBgColor('bg-red-500')
        setHoverBg('hover:bg-red-600')
        break
      case '---':
        setBgColor('bg-gray-300')
        setHoverBg('hover:bg-gray-400')
      default:
        console.log('アクションの色ミス')
    }
  }, [move])
  const posList = [
    { str: 'UTG', num: 3 },
    { str: 'HJ', num: 2 },
    { str: 'CO', num: 1 },
    { str: 'BTN', num: 0 },
    { str: 'SB', num: 9 },
    { str: 'BB', num: 8 },
    { str: '---', num: 10 },
  ]
  const moveList = ['call', 'check', 'fold', 'bet', 'raise', 'allin', '---']

  return (
    <Grid>
      <Menu>
        <Menu.Target>
          <ActionButton
            text={pos}
            style="rounded-l-md rounded-r-none bg-slate-600 text-white w-[35%] text-sm p-1 border-2  hover:bg-slate-700"
          />
        </Menu.Target>
        <Menu.Dropdown>
          {posList.map((pos, index) => (
            <DropDownItem key={index} text={pos.str} />
          ))}
        </Menu.Dropdown>
      </Menu>
      <Menu>
        <Menu.Target>
          {size !== 0 ? (
            <ActionButton
              text={`${move}` + ` ` + `${size}`}
              style={`rounded-l-none rounded-r-md text-white ${bg} w-[65%] text-sm p-1 border-2 ${hoverBg}  uppercase`}
            />
          ) : (
            <ActionButton
              text={move}
              style={`rounded-l-none rounded-r-md text-white ${bg} w-[65%] text-sm p-1 border-2 ${hoverBg}  uppercase`}
            />
          )}
        </Menu.Target>
        <Menu.Dropdown>
          {moveList.map((move, index) => (
            <DropDownItem key={index} text={move} />
          ))}
        </Menu.Dropdown>
      </Menu>
    </Grid>
  )
}

export default ActionMol
