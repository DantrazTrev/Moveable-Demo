import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { makeStore, persistor , store } from  "@/stores"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Component {...pageProps} />
    </PersistGate>
    </Provider>
  )
}

export default App