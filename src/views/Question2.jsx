import React from 'react'
import { Link } from 'react-router-dom'

export default function Question2() {
  return (
    <>
    <h2>Gender</h2>
    <div className='button-container'>

    <Link to={`/question3`}><button className="button">Male</button></Link>
    <Link to={`/question3`}><button className="button">Female</button></Link>
    <Link to={`/question3`}><button className="button">Private</button></Link>
    </div>
    </>
  )
}