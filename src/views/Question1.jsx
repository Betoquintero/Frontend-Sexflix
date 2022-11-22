import React from 'react'
import { Link } from 'react-router-dom'

export default function Question1() {
  return (
    <>
    
    <div className='button-container'> 
    <h2>Love Language</h2>     
      <Link to={`/question2`}>
        <button className="round-button">
          <div className='round-button-circle'>
            <span className='round-button'>TEST</span>
          </div>
        </button>      
      </Link>
      <Link to={`/question2`}><button className="round-button">Touch</button></Link>
      <Link to={`/question2`}><button className="round-button">Quality time</button></Link>
    </div>
    
    {/* <button class="round-button">
<div class="round-button-circle">
<span class="round-button">Test</span>
</div>
</button> */}
    </>
  )
}