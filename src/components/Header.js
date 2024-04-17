import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <div className='banner'>
                <Link to="/" className='bannerBox'><p className='link'>Accueil</p></Link>
                <Link to="/portfolio" className='bannerBox'><p className='link'>Portfolio</p></Link>
                <Link to="/contact" className='bannerBox'><p className='link'>Contact</p></Link>
                <Link to="https://www.linkedin.com/in/christian-fezard-développeur-front-end-react" target="_blank" className='bannerBox'><p className='link'>LinkedIn</p></Link>
            </div>
        </header>
    </>
  )
}

export default Header