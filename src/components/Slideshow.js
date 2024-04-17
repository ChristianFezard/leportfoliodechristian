import React from 'react'
import { useState, useEffect } from 'react'
import { slide } from '../data/data'


const Slideshow = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slide.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [slide.length])
    

  return (
    <div className='slideshow'>
      {slide.map((slide, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <img src={slide.imageUrl} alt={slide.caption} className="slide-img" />
        </div>
      ))}
    </div>
  )
}

export default Slideshow