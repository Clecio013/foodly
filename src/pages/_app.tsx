import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { theme } from 'theme'
import { DefaultSession } from 'next-auth'

type Props = AppProps & {
  pageProps: {
    session: DefaultSession & {
      user: {
        userId: string
      }
    }
  }
}

const App = ({ Component, pageProps: { session, ...pageProps } }: Props) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default App
