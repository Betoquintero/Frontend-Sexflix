import React from 'react'
import { Link } from 'react-router-dom'

export default function Question3() {
  return (
    <>
    <div className='button-container'>
    <h2>Relationship Status</h2>

    <Link to={`/preactivity`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Single</span>
          </div>
        </button>      
      </Link>
      <Link to={`/preactivity`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Married</span>
          </div>
        </button>      
      </Link>
      <Link to={`/preactivity`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Complicated</span>
          </div>
        </button>      
      </Link>
    </div>
    </>
  )
}