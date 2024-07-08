import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/:page?' Component={HomePage}/>
        </Routes>    
    </BrowserRouter>
  )
}

export default RouterPart
