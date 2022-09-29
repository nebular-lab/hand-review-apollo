import { useReactiveVar } from '@apollo/client'
import { Button } from '@mantine/core'
import React, { memo } from 'react'
import { useRecoilState } from 'recoil'
import { settedNumState } from 'store/stores'

const PercentNum = memo(({ num }: { num: number }) => {
  const [settedNum, setSettedNum] = useRecoilState(settedNumState)
  return (
    <Button
    
      className="w-full rounded-sm h-9 justify-center flex items-center text-xl shadow-md"
      onClick={() => setSettedNum(num)}
    >
      {num}
    </Button>
  )
})
PercentNum.displayName = 'PercentNum'

export default PercentNum