import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserlistProvider from './constext/Userlist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserlistProvider>

    <App />
    </UserlistProvider>
  </StrictMode>,
)
