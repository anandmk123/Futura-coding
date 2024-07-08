import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Location from './Components/Location'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Home/>
        }/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/location' Component={Location}/>              
      </Routes>
    </BrowserRouter>
  )
}

export default App
