import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    <div className='button-container'>

  
    <h2>Make a sensual massage to your partner</h2>
    <Link className='links' to={`/activity1a`}>
        <button className="round-button">          
            <span className='round-button'>Let's do it!</span>          
        </button>      
      </Link>
      <Link className='links' to={`/activity1a`}>
        <button className="round-button">
          
            <span className='round-button'>No way!</span>
          
        </button>      
      </Link>
    
    </div>
    </>
  )
}