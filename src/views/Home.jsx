import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 className='title-header'>SEXFLIX</h1>
      <div className='button-container'>
      <Link to={`/question1`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Let's get started!</span>
          </div>
        </button>      
      </Link>
      </div>
    </div>
  )
}
