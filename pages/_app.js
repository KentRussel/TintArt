import '../styles/globals.css'
import React from 'react'
import { AppWrapper } from '../context/AppContext'
import { Toaster } from 'react-hot-toast'
import FacebookMsg from '../components/layout-components/FacebookMsg'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <AppWrapper>
        <Component {...pageProps} />
        <Toaster/>
        <FacebookMsg/>
      </AppWrapper>
    </>
  )
}

export default MyApp;