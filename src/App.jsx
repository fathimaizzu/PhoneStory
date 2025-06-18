import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
   const navigate=useNavigate()
  useEffect (()=>{
    navigate("/Home");

  },[navigate])

  return (
    <>
    <div className='w-screen h-screen'>
      <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default App
