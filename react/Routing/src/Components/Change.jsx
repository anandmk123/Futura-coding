import React from 'react'
import { Link } from 'react-router-dom'

function Change() {
  return (
    <div>
      Change
      <Link to={'password'}>Go to Password</Link> <br />
      <Link to={'info'}>Go to Info</Link> <br />
    </div>
  )
}

export default Change
