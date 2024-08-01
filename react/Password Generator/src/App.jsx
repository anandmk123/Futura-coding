import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouterPart from './Routes/RouterPart';


function App() {

  return (
    <>
      <RouterPart/>
      <ToastContainer/>
    </>
  )
}

export default App
