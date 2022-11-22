import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 className='title-header'>QUINKY</h1>
      <div className='button-container'>
      <Link className='links' to={`/question1`}>
        <button className="button">
          
            <span className='button'>Let's play!</span>
          
        </button>      
      </Link>
      </div>
    </div>
  )
}
