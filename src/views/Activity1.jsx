import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    <div className='button-container'>

  
    <h2>Make a sensual massage to your partner</h2>
    <Link to={`/activity1a`}><button className="button">Let's do it!</button></Link>
    
    <Link to={`/activity1b`}><button className="button">No way!</button></Link>
    </div>
    </>
  )
}