import '../styles/globals.css'
import  { AppProps } from 'next/app'
import Head from 'next/head'

import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../src/theme'


function MyApp({ Component, pageProps } : AppProps ) {
 
  return( 
 
  <>
    <Head>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
     <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    
    <ThemeProvider theme={theme} >
     
      <CssBaseline/>
      <Component {...pageProps} />  
    </ThemeProvider>
    
  </>
  )
  
}

export default MyApp
