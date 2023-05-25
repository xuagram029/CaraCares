import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import { SidebarContextProvider } from './context/SbContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
