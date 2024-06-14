import React from 'react'
import ReactDOM from 'react-dom/client'
import * as lumos from 'ckt-lumos-lumos'
import App from './App.tsx'
import './index.css'

Object.assign(window, { lumos })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
