import { useReactiveVar } from '@apollo/client'
import _ from 'lodash'
import {
  Accordion,
  Button,
  Grid,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core'
import React, { FC, memo, useEffect, useState } from 'react'
import { ActionInterface } from 'types/localTypes/types'

export interface ActionProps extends ActionInterface {
  onClickPos?: (pos: number, street: number, order: number) => void
  onClickMove?: (move: string, street: number, order: number) => void
  onDoubleClick?: (street: number, order: number) => void
}
const Action: FC<ActionProps> = (props) => {
  const {
    position,
    move,
    size,
    street,
    order,
    onClickPos,
    onClickMove,
    onDoubleClick,
  } = props
  const onClickPosF = onClickPos ? onClickPos : () => {}
  const onClickMoveF = onClickMove ? onClickMove : () => {}
  const onDoubleClickF = onDoubleClick ? onDoubleClick : () => {}

  const [isSelected, setIsSelected] = useState(true)
  const [bg, setBgColor] = useState('gray')
  const [hoverBg, setHoverBg] = useState('hover:gray')

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
  return (
    <Grid.Col span={3} className="w-32 shadow-md  p-0 m-1">
      <Menu shadow="md">
        <Menu.Target>
          <Button
            className="rounded-l-md rounded-r-none bg-slate-600 text-white w-[35%] text-xs p-0 border-2  hover:bg-slate-700"
            onDoubleClick={() => onDoubleClickF(street, order)}
          >
            {posList.map((pos, index) => {
              if (pos.num === position) {
                return <div key={index}>{pos.str}</div>
              }
            })}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {posList.map((pos, index) => (
            <Menu.Item
              key={index}
              onClick={() => {
                onClickPosF(pos.num, street, order)
              }}
            >
              {pos.str}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
      <Menu shadow="md">
        <Menu.Target>
          {move === 'bet' || move === 'raise' || move === 'allin' ? (
            <Button
              className={`rounded-l-none rounded-r-md text-white ${bg} w-[65%] text-xs p-1 border-2 ${hoverBg}  uppercase`}
              onDoubleClick={() => onDoubleClickF(street, order)}
            >
              {`${move}` + ` ` + `${size}`}
            </Button>
          ) : (
            <Button
              className={`rounded-l-none rounded-r-md text-white ${bg} w-[65%] text-xs p-1 border-2 ${hoverBg}  uppercase`}
              onDoubleClick={() => onDoubleClickF(street, order)}
            >
              {move}
            </Button>
          )}
        </Menu.Target>
        <Menu.Dropdown>
          {moveList.map((move, index) => (
            <Menu.Item
              key={index}
              className="bg-red"
              onClick={() => {
                onClickMoveF(move, street, order)
              }}
            >
              {move}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Grid.Col>
  )
}

Action.displayName = 'Action'

export default Action
