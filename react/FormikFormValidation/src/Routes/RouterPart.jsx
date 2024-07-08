import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormValidation from '../Components/FormValidation'
import FormValidationYup from '../Components/FormValidationYup'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={FormValidation}></Route>
            <Route path='/formvalidationyup' Component={FormValidationYup}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
