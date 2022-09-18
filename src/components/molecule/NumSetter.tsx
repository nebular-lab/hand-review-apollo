import { useReactiveVar } from '@apollo/client'
import { Grid } from '@mantine/core'
import { numVar } from 'cache'
import Num from 'components/atom/Num'
import React from 'react'

const NumSetter = () => {
  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  const settedNum=useReactiveVar(numVar)
  return (
    <Grid>
      {nums.map((num) => {
        return (
          <Grid.Col key={num} span={4}>
            <Num num={num} />
          </Grid.Col>
        )
      })}
      <Grid.Col>{settedNum}</Grid.Col>
    </Grid>
  )
}

export default NumSetter
