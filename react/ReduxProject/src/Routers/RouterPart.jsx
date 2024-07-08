import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import UseReducerWorking from '../Components/UseReducerWorking'
import ReduxWorking from '../Components/ReduxWorking'
import TodoUsingRedux from '../Components/TodoUsingRedux'

function RouterPart() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/usereducer' Component={UseReducerWorking}/>
            <Route path='/reduxworking' Component={ReduxWorking}/>
            <Route path='/todoredux' Component={TodoUsingRedux}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPart
