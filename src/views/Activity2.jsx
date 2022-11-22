import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity() {
  return (
    <>
    <div className='button-container'>
    <h2>Fantasize with your partner about what you would like to do</h2>

    <Link to={`/activity2a`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Let's do it!</span>
          </div>
        </button>      
      </Link>
      <Link to={`/activity2a`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>No way!</span>
          </div>
        </button>      
      </Link>
    </div>
    </>
  )
}