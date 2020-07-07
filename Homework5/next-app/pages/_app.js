import React, { useState, useEffect } from 'react'
import './All.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return ( 
  <>
      {isMounted && <Component {...pageProps} />}
    </>
  )
}

export default MyApp