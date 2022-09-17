import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={initializeApollo()}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
