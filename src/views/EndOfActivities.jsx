import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Activity1() {
  return (
    <>
    
    <h2>You've done all of our activities</h2>
    <Link to={`/`}><button className="button">Take me home!</button></Link>
    <Link to={`/activity2`}><button className="button">Show me more</button></Link>
    
    </>
  )
}