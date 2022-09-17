import { makeVar } from '@apollo/client'

interface Hand {
  title: string
  content: string
  actions: Action[]
}
interface Action {
  street: number
  position: number
  move: string
  size?: number
  order: number
}

export const handVar = makeVar<Hand[]>([])
