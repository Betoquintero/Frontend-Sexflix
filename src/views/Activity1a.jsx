import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    <div className='button-container'>
    <h2>Whisper in your partner's ear</h2>
    <Link to={`/activity2`}><button className="button">Let's do it!</button></Link>
    
    <Link to={`/activity2`}><button className="button">No way!</button></Link>
    </div>
    </>
  )
}