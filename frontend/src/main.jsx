import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App />}/>
      <Route path='/home' element ={<Home />}/>
    </Routes>
  </BrowserRouter>
)
