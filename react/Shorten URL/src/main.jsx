import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { URLProvider } from './Utils/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <URLProvider>
      <App />
    </URLProvider>
  </React.StrictMode>,
)
