import React from 'react'
import { Link } from 'react-router-dom'


// Load a random activity depending of given answers (logic to be developed)
export default function Preactivity() {
  return (
    <>
    
    <h2>Based on your answers we have a few activities for you!</h2>
    <Link to={`/activity1`}><button className="button">Let's do it!</button></Link>
    
    
    </>
  )
}