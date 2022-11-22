import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    <div className='button-container'>
    <h2>Touch your partner's feet</h2>
    <Link to={`/endofactivities`}><button className="button">Let's do it!</button></Link>
    
    <Link to={`/endofactivities`}><button className="button">No way!</button></Link>
    </div>
    </>
  )
}