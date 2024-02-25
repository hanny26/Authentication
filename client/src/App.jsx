import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import { Routes, Route } from 'react-router-dom'


function App() {
 
   return (
    <>
       <Header />
       
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

       </Routes>

        
    </>
  )
}

export default App
