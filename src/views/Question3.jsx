import React from 'react'
import { Link } from 'react-router-dom'

export default function Question3() {
  return (
    <>
    <div className='button-container'>
    <h2>Relationship Status</h2>

    <Link to={`/preactivity`}>
        <button className="button">
          
            <span className='button'>Single</span>
          
        </button>      
      </Link>
      <Link to={`/preactivity`}>
        <button className="button">
          
            <span className='button'>Married</span>
          
        </button>      
      </Link>
      <Link to={`/preactivity`}>
        <button className="button">
          
            <span className='button'>Complicated</span>
          
        </button>      
      </Link>
    </div>
    </>
  )
}