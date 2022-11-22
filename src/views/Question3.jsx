import React from 'react'
import { Link } from 'react-router-dom'

export default function Question3() {
  return (
    <>
    <div className='button-container'>
    <h2>Relationship Status</h2>

    <Link to={`/preactivity`}><button className="button">Single</button></Link>
    <Link to={`/preactivity`}><button className="button">Married</button></Link>
    <Link to={`/preactivity`}><button className="button">Complicated</button></Link>
    </div>
    </>
  )
}