import React from 'react'
import { Link } from 'react-router-dom'

export default function Question3() {
  return (
    <>
    <h2>Relationship Status</h2>
    <div className='button-container'>

    <Link to={`/activity`}><button className="button">Single</button></Link>
    <Link to={`/activity`}><button className="button">Married</button></Link>
    <Link to={`/activity`}><button className="button">Complicated</button></Link>
    </div>
    </>
  )
}