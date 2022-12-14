import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/permanent-marker'
import "@fontsource/poppins/300.css"


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
