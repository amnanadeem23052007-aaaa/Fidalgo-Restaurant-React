import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <div
        className="
        absolute top-0 left-0 z-50
        w-full h-[15vh]
        flex justify-around items-center
        bg-transparent text-white
        "
      >
        <ul className='flex gap-[30px] text-[20px] max-[685px]:text-[15px] max-[645px]:hidden'>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
          <li><Link to="/ContactUs">ContactUs</Link></li>
          <li><Link to="/ComingSoon">ComingSoon</Link></li>
        </ul>

        <img src={Logo} alt="logo" className='h-[70%]' />

        <button className='border border-white px-5 py-2.5 text-[20px] hover:bg-white hover:text-amber-600 max-[945px]:hidden'>
          Book A Table
        </button>

        <Menu
          onClick={() => setOpen(true)}
          className='hidden mt-5 max-[645px]:block cursor-pointer'
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%]  bg-[#0a1c1c] text-white
        transform ${open ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-300 z-50`  }
      >
        <div className="flex justify-end p-5">
          <X className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        <ul className="flex flex-col items-center gap-8 text-[22px] mt-10">
          <li onClick={() => setOpen(false)}><Link to="/Home">Home</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/Menu">Menu</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/AboutUs">AboutUs</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/ContactUs">ContactUs</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/ComingSoon">ComingSoon</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
