import NextAuth from 'components/organism/NextAuth'
import { Layout } from 'components/template/Layout'
import React from 'react'

const auth = () => {
  return (
    <Layout title="認証">
      <NextAuth />
    </Layout>
  )
}

export default auth
