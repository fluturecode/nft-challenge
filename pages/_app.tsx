import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Using Rinkeby instead of Mainnet, to test network on Ethereum
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
