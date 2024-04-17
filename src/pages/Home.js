import React from 'react'
import Header from '../components/Header'
import SideText from '../components/SideText'
import Slideshow from '../components/Slideshow'

const Home = () => {
  return (
    <>
        <Header />
      <div className='homeContent'>
        <SideText />
        <Slideshow />
      </div>
    </>
  )
}

export default Home