import React from 'react'
import { Link } from 'react-router-dom'

export default function Question3() {
  return (
    <>
    <h2>Relantionship Status</h2>
    <Link to={`/question3`}><button className="button">Single</button></Link>
    <Link to={`/question3`}><button className="button">Married</button></Link>
    <Link to={`/question3`}><button className="button">Complicated</button></Link>
    </>
  )
}