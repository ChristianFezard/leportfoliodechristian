import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/data'

export const Card = () => {
  return (
    <>
        {data.map(item =>
            <div key={item.id} className="card">
                <Link to={item.link} target="_blank" className='link'>
                    <div className="imageContainer">
                        <img src={item.image} alt={item.title}/>
                        <div className="imageOverlay">{item.description}</div>
                    </div>
                    <div className="title">
                        <span>{item.title}</span>
                        <ul>
                        {item.language.map(lang => (
                            <li>{lang}</li>
                        ))}
                        </ul>
                    </div>    
                </Link>
            </div>
        )}
    </>
  )
}
