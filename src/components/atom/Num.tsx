import { useReactiveVar } from '@apollo/client'
import { Button } from '@mantine/core'
import React, { memo } from 'react'
import { useRecoilState } from 'recoil'
import { settedNumState } from 'store/stores'

const Num = memo(({ num }: { num: number }) => {
  const [settedNum, setSettedNum] = useRecoilState(settedNumState)
  return (
    <Button
      className="rounded-sm h-9 justify-center flex items-center text-xl shadow-md"
      onClick={() => setSettedNum(settedNum * 10 + num)}
    >
      {num}
    </Button>
  )
})
Num.displayName = 'Num'

export default Num
