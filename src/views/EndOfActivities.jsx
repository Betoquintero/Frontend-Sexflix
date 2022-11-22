import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    
    <h2>You've done all of our activities</h2>
    <div className='button-container'>
    <Link to={`/`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Take me home!</span>
          </div>
        </button>      
      </Link>
      <Link to={`/activity2`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Show me more</span>
          </div>
        </button>      
      </Link>
    </div>
    </>
  )
}