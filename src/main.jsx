import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './Components/NavBar/Navbar.jsx'
import './global.css'
import { Footer } from './Components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <hr />
    <App />
    <Footer/>

  </StrictMode>,
)
