import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import CartPage from '../Pages/CartPage'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  Component={HomePage}></Route>
            <Route path='/cart'  Component={CartPage}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
