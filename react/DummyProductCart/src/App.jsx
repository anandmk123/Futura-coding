import { useState } from 'react'
import RouterPart from './Routes/RouterPart'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
      <RouterPart/>
      <ToastContainer />
    </>
  )
}

export default App
