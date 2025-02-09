import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider, createRoutesFromElements, Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Authenticate from './pages/Authenticate.jsx'
import Register from './pages/Register.jsx'
import Blog from './pages/Blog.jsx'
import Analyze from './pages/Analyze.jsx'
import Investment from './pages/Investment.jsx'
import Profile from './pages/Profile.jsx'
import Communities from './pages/Communities.jsx'
import Budget from './pages/Budget.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route>
      <Route path='/' element={<App />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/authenticate' element={<Authenticate />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/analyze' element={<Analyze />}/>
      <Route path='/communities' element={<Communities />}/>
      <Route path='/investment' element={<Investment />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/budget' element={<Budget />}/>
    </Route>
  </>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
