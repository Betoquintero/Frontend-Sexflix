import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    <div className='button-container'>
    <h2>Dress something sexy and surprise your parner</h2>

    <Link to={`/endofactivities`}>
        <button className="button">
          
            <span className='button'>Let's do it!</span>
          
        </button>      
      </Link>
      <Link to={`/endofactivities`}>
        <button className="button">
          
            <span className='button'>No way!</span>
          
        </button>      
      </Link>
    </div>
    </>
  )
}