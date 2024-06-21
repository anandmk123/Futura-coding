import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
      Profile Page
      <Link to={'change'}>Go to Change</Link> <br />
    </div>
  )
}

export default Profile
