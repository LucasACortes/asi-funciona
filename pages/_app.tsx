import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/linked-list.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp