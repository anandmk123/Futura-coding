import RouterPart from './Routes/RouterPart'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <RouterPart/>
      <Toaster position='top-right'/>
    </>
  )
}

export default App
