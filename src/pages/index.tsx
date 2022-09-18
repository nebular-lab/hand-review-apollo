import { useReactiveVar } from '@apollo/client'
import type { NextPage } from 'next'
import { Button } from '@mantine/core'
import { Layout } from 'components/template/Layout'
import { NextLink } from '@mantine/next'

const Home: NextPage = () => {
  return (
    <Layout title="home">
      ホームーページ
      <Button component={NextLink} href="/hands">
        handsへ
      </Button>
    </Layout>
  )
}

export default Home
