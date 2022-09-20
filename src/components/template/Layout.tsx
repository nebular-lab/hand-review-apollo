import { ReactNode, FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { MdOutlineAccountCircle } from 'react-icons/md'
import Header from 'components/organism/Header'

interface Props {
  children: ReactNode
  title: string
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen flex-col font-mono text-sm bg-blue-50 text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <main className="  mx-52  pt-10">{children}</main>
    </div>
  )
}
