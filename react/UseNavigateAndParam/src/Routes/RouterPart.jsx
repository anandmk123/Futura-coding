import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import UpdatePage from '../Pages/UpdatePage'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/update-task/:updateId' Component={UpdatePage}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
