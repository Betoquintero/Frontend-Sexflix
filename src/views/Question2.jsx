import React from 'react'
import { Link } from 'react-router-dom'

export default function Question2() {
  return (
    <>
    <div>Love Language</div>
    <Link to={`/question3`}><button>Option 1</button></Link>
    <Link to={`/question3`}><button>Option 2</button></Link>
    <Link to={`/question3`}><button>Option 3</button></Link>
    </>
  )
}