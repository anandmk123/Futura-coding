import React from 'react'
import NavigationBar from './NavigationBar/NavigationBar'
import CarouselsPart from './CarouselsPart/CarouselsPart'
import ShowProduct from './ShowProduct/ShowProduct'

function Home() {
  return (
    <>
        <NavigationBar/>
        <CarouselsPart/>
        <ShowProduct/>
    </>
  )
}

export default Home
