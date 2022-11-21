import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Sexflix</h1>
      <Link to={`/question1`}><button className="button">Let's get started</button></Link>
    </div>
  )
}
