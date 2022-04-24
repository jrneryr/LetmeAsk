import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './services/firebase'
import './style/global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);