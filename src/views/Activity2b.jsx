import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    <div className='button-container'>
    <h2>Prepare your partner a fancy dinner with a spicy dessert</h2>

    <Link to={`/endofactivities`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>Let's do it!</span>
          </div>
        </button>      
      </Link>
      <Link to={`/endofactivities`}>
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