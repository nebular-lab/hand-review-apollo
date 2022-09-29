import '../../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from 'lib/apolloClient'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { RecoilRoot } from 'recoil'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const client = initializeApollo()
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light',
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </RecoilRoot>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
