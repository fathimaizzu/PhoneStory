import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <>
    <div className='w-screen h-screen'>
      <Navbar/>
    <Outlet/>
    </div>
    </>
  )
}

export default App
