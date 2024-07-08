import React from 'react'
import { Link } from 'react-router-dom'
import UseReducerWorking from '../Components/UseReducerWorking'

function HomePage() {
  return (
    <>
    <Link to={'/usereducer'}>Use Reducer</Link> <br />
    <Link to={'/reduxworking'}>Redux Working</Link><br />
    <Link to={'/todoredux'}>Todo using Redux</Link>
    </>
  )
}

export default HomePage
