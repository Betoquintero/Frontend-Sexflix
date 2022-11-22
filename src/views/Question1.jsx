import React from 'react'
import { Link } from 'react-router-dom'

export default function Question1() {
  return (
    <>
    <h2>Love Language</h2>
    <div className='button-container'>
      
    <Link to={`/question2`}><button className="button">Presents</button></Link>
    <Link to={`/question2`}><button className="button">Touch</button></Link>
    <Link to={`/question2`}><button className="button">Quality time</button></Link>
    </div>
    
    
    </>
  )
}