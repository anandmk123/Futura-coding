import { useState } from 'react'
import './App.css'
import Navigationbar from './components/Navigationbar/Navigationbar'
import MainHeader from './components/MainHeader/MainHeader'
import SectionFirst from './components/SectionFirst/SectionFirst'
import SectionSecond from './components/SectionSecond/SectionSecond'
import BottomPart from './components/BottomPart/BottomPart'

function App() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <MainHeader></MainHeader>
      <SectionFirst></SectionFirst>
      <SectionSecond></SectionSecond>
      <BottomPart></BottomPart> 
    </>
  )
}

export default App
