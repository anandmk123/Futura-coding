import React, { Fragment } from 'react'
import ShowProductList from '../Components/ShowProductList'
import NavigationBar from '../Components/NavigationBar'

function HomePage() {
  return (
    <Fragment>
        <NavigationBar/>
        <ShowProductList/>
    </Fragment>
  )
}

export default HomePage
