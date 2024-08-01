import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ValidateHash from '../Pages/ValidateHash'

function RouterPart() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/validateHash' Component={ValidateHash}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
