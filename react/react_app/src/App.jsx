import { useState } from 'react'
import './App.css'
import Slider from './components/slider/Slider'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <>
     <Header/>
     <Slider></Slider>
     <Footer></Footer>
     <Profile></Profile>
    </>
  )
}

export default App
