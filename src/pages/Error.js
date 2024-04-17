import React from 'react'
import Header from '../components/Header'

const Error = () => {
  return (
    <>
        <Header />
        <div className='errorText'>
            <h1 className='errorTitle'>400</h1>
            <p>Oops! Je suis désolé mais la page n'existe pas...</p>
        </div>
    </>
  )
}

export default Error