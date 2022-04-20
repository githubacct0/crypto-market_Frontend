import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="UEuc6zEwSPLP2LPm5mpvbFBS6yeM7oaghvzgvuov"
      serverUrl="https://itearbgkos9z.usemoralis.com:2053/server"
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  )
}

export default MyApp
