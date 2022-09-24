import { Button } from '@mantine/core'
import { NextLink } from '@mantine/next'
import React from 'react'

const Header = () => {
  return (
    <header className="h-20  bg-blue-100 shadow-md items-center flex justify-between px-10">
      <div className="text-2xl">ハンドレビュー研究所</div>
      <div className="gap-3 flex">
        <Button component={NextLink} href="/">
          HOME
        </Button>
        <Button component={NextLink} href="/hands">
          ハンド集
        </Button>
        <Button component={NextLink} href="/new-edit" color="orange">
          新規作成
        </Button>
      </div>
    </header>
  )
}

export default Header
