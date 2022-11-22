import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity() {
  return (
    <>
    <div className='button-container'>
    <h2>Fantasize with your partner about what you would like to do</h2>

    <Link className='links' to={`/activity2a`}>
        <button className="button">
          
            <span className='button'>Let's do it!</span>
          
        </button>      
      </Link>
      <Link className='links' to={`/activity2a`}>
        <button className="button">
          
            <span className='button'>No way!</span>
          
        </button>      
      </Link>
    </div>
    </>
  )
}