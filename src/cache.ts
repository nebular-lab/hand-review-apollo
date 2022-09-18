import { makeVar } from '@apollo/client'
import { CardType } from 'components/atom/Card'
import { GetHandByIdQuery } from 'types/generated/graphql'

interface Review {
  title: string
  content: string
  label: Label[]
  preflop: StreetAction
  flop: StreetAction
  turn: StreetAction
  river: StreetAction
}
interface Label {
  name: string
  color: string
}
interface StreetAction {
  es?: number
  stack?: number
  cards?: CardType[]
  actions?: Action[]
}
interface Action {
  position: number
  move: string
  size?: number
  order: number
}

const defaultReview:Review = {
  title: '',
  content: '',
  label: [],
  preflop: {},
  flop: {},
  turn: {},
  river: {},
}

export const isOpenCardSetterVar = makeVar<boolean>(false)
export const isOpenNumSetterVar = makeVar<boolean>(false)

export const editingReviewVar=makeVar<GetHandByIdQuery>({})
// export const handVar = makeVar<Hand[]>([])
