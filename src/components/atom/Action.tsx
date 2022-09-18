import {
  Accordion,
  Button,
  Grid,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core'
import React, { FC, useEffect, useState } from 'react'

export interface ActionType {
  position: number
  move: string
  size?: number
}
const Action: FC<ActionType> = (props) => {
  let stringPosition
  switch (props.position) {
    case 0:
      stringPosition = 'BTN'
      break
    case 1:
      stringPosition = 'CO'
      break
    case 2:
      stringPosition = 'HJ'
      break
    case 3:
      stringPosition = 'UTG'
      break
    case 8:
      stringPosition = 'BB'
      break
    case 9:
      stringPosition = 'SB'
      break
    default:
      stringPosition = 'err'
  }
  const [position, setPosition] = useState(stringPosition)
  const [move, setMove] = useState(props.move)
  const [bg, setBgColor] = useState('gray')
  const [hoverBg, setHoverBg] = useState('hover:gray')
  const [size, setSize] = useState(props.size)
  const posList = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB']
  const moveList = ['call', 'check', 'fold', 'bet', 'raise', 'allin']

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
        setHoverBg('hover:bg-orange-700')
        break
      case 'call':
        setBgColor('bg-lime-500')
        setHoverBg('hover:bg-lime-600')
        break
      case 'check':
        setBgColor('bg-lime-500')
        setHoverBg('hover:bg-lime-500')
        break
      case 'allin':
        setBgColor('bg-red-500')
        setHoverBg('hover:bg-red-500')
        break
      default:
        console.log('アクションの色ミス')
    }
  }, [move])
  return (
    <Grid className="w-32 mx-2">
      <Menu shadow="md">
        <Menu.Target>
          <Button className="rounded-l-md rounded-r-none bg-slate-600 text-white w-[35%] text-sm p-1 border-2  hover:bg-slate-700">
            {position}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {posList.map((pos, index) => (
            <Menu.Item key={index} onClick={() => setPosition(pos)}>
              {pos}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
      <Menu shadow="md">
        <Menu.Target>
          {size ? (
            <Button
              className={`rounded-l-none rounded-r-md text-white ${bg} w-[65%] text-sm p-1 border-2 ${hoverBg}  uppercase`}
            >
              {`${move}` + ` ` + `${size}`}
            </Button>
          ) : (
            <Button
              className={`rounded-l-none rounded-r-md text-white ${bg} w-[65%] text-sm p-1 border-2 ${hoverBg}  uppercase`}
            >
              {move}
            </Button>
          )}
        </Menu.Target>
        <Menu.Dropdown>
          {moveList.map((move, index) => (
            <Menu.Item key={index} onClick={() => setMove(move)}>
              {move}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Grid>
  )
}

export default Action
