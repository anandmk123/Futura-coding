import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div>
      User Page <br />
      <Link to={'profile'}>Go to Profile</Link> <br />
      <Link to={'settings'}>Go to Settings</Link>

    </div>
  )
}

export default User
