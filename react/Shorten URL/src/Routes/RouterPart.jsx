import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ShortURLPage from '../Pages/ShortURLPage'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/shorturl' Component={ShortURLPage}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
