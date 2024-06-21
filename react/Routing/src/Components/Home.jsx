import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      Home <br />
      <Link to={'/navigationbar'}>Go to Navigation Bar</Link> <br />
      <Link to={'/givenelement'}>Go to Given element</Link> <br />
      <Link to={'/directelement'}>Go to Direct element</Link> <br />
      <Link to={'/user'}>User</Link> <br />
    </div>
  )
}

export default Home
