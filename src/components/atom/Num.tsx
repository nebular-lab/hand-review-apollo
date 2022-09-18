import { useReactiveVar } from '@apollo/client'
import { numVar } from 'cache'
import React from 'react'

const Num = ({ num }: { num: number }) => {
  const settedNum = useReactiveVar(numVar)
  return (
    <div
      className="rounded-sm h-9 w-6 justify-center flex items-center text-xl shadow-md"
      onClick={() => numVar(settedNum * 10 + num)}
    >
      {num}
    </div>
  )
}

export default Num
