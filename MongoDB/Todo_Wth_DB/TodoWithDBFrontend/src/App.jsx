import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify'
import RouterPart from './Routes/RouterPart';

function App() {

  return (
    <>
        <RouterPart></RouterPart>
        <ToastContainer/>
    </>
  )
}

export default App
