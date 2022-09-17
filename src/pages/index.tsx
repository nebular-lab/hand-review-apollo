import { useReactiveVar } from '@apollo/client'
import { handVar } from 'cache'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const hands = useReactiveVar(handVar)
  return (
    <>
      <div className="text-red-500">text</div>
      {hands.map((hand, index) => {
        return (
          <div key={index}>
            <p>{hand.title}</p>
            <p>{hand.content}</p>
            {hand.actions.map((action, index) => {
              return (
                <div key={index}>
                  <p>{action.street}</p>
                  <p>{action.position}</p>
                  <p>{action.move}</p>
                  <p>{action.size}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default Home
