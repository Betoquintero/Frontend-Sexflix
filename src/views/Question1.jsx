import React from 'react'
import { Link } from 'react-router-dom'

export default function Question1() {
  return (
    <>
    
    <div className='button-container'> 
    <h2>Love Language</h2>     
      <Link to={`/question2`}>
        <button className="button">
          
            <span className='button'>Presents</span>
          
        </button>      
      </Link>
      <Link to={`/question2`}>
        <button className="button">
          
            <span className='button'>Touch</span>
          
        </button>      
      </Link>
      <Link to={`/question2`}>
        <button className="button">
          
            <span className='button'>Quality time</span>
          
        </button>      
      </Link>
    </div>
    
    {/* <button class="round-button">
<div class="round-button-circle">
<span class="round-button">Test</span>
</div>
</button> */}
    </>
  )
}