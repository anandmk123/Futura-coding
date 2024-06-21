import './App.css'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ProductDetails/>
      <ToastContainer />
    </>
  )
}

export default App
