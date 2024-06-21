import './App.css'
import Form_Logic from './Components/Form_Logic/Form_Logic'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Context_Testing from './Components/Context_Testing/Context_Testing';
import UseEffectTest from './Components/UseEffectTest/UseEffectTest';
import FormValidation from './Components/FormValidation/FormValidation';
import MouseFollower from './Components/MouseFollower/MouseFollower';

function App() {

  return (
    <>
      <MouseFollower/>
      <Form_Logic></Form_Logic>
      <ToastContainer />
      <Context_Testing></Context_Testing>
      <UseEffectTest/>
      <FormValidation/>
    </>
  )
}

export default App
