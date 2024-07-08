import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import CartPage from '../Pages/CartPage'
import SingleProductPage from '../Pages/SingleProductPage'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/cart' Component={CartPage}/>
            <Route path='/product/:page' Component={SingleProductPage}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
