import React from 'react'
import { Link } from 'react-router-dom'

export default function Question2() {
  return (
    <>
    <div className='button-container'>
    <h2>Gender</h2>

    <Link to={`/question3`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Male</span>
          </div>
        </button>      
      </Link>

      <Link to={`/question3`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Female</span>
          </div>
        </button>      
      </Link>

      <Link to={`/question3`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Private</span>
          </div>
        </button>      
      </Link>
    </div>
    </>
  )
}