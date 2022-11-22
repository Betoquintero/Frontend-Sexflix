import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Preactivity() {
  return (
    <>
    <div className='button-container'>

    <h2>Based on your answers we have a few activities for you!</h2>
    <Link to={`/activity1`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Let's do it!</span>
          </div>
        </button>      
      </Link>
    </div>
    
    
    
    </>
  )
}