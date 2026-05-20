import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ComingSoon from './pages/ComingSoon'
function App() {

  return (
    <>
     <Navbar></Navbar>
     <main>
      <Routes>
          <Route path='/' element={<Home />} /> 
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/ContactUs' element={< ContactUs/>}></Route>
        <Route path='/ComingSoon' element={<ComingSoon/>}></Route>
      </Routes>
     </main>
    </>
  )
}

export default App
