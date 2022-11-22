import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Question3() {
  return (
    <>
    
    <h2>Make a sensual massage to your partner</h2>
    <Link to={`/activity`}><button className="button">Let's do it!</button></Link>
    
    <Link to={`/activity`}><button className="button">No way!</button></Link>
    </>
  )
}