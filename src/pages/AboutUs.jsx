import React from 'react'
import img1 from '../assets/women.jpg'
import img2 from '../assets/glass.jpg'
import img3 from '../assets/food.jpg'
import Logo from '../assets/logo.png'
const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="
          relative w-full h-[80vh]
          bg-[url('/src/assets/h1.jpg')]
          bg-cover bg-center bg-no-repeat
        "
      >
        <div className="w-full h-full bg-black/20"></div>
      </div>

      {/* ABOUT SECTION 1 (IMAGE LEFT) */}
      <div className="w-full bg-[#0f2323] text-white flex px-12 py-5 max-[610px]:px-0 max-[1120px]:px-3.5 overflow-x-hidden">

        <div className="w-1/2 h-screen max-[1120px]:hidden">
          <img
            src={img1}
            alt="about"
            className="w-full h-full object-cover rounded-[70px]"
          />
        </div>

        <div className="w-1/2 flex flex-col items-center justify-around gap-8 text-center px-4 max-[1120px]:w-full max-[1120px]:h-auto">
          <h1 className="text-5xl max-[510px]:text-3xl">
            OUR GOALS & HISTORY
          </h1>

          <p className="max-w-[900px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <img
            src={img2}
            alt="glass"
            className="w-1/2 max-[500px]:w-[90%] h-auto object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold">OPENING HOURS</h2>
            <p>Mon – Thu: 10 am – 01 am</p>
            <p>Fri – Sun: 10 am – 02 am</p>
          </div>
        </div>
      </div>

    {/* ABOUT SECTION 2 (IMAGE RIGHT / CONTENT LEFT) */}
<div className="
  w-full bg-[#0f2323] text-white mt-2
  flex flex-row-reverse items-center
  px-12 py-16
  max-[645px]:flex-col gap-5
  max-[1120px]:px-4
  overflow-x-hidden 
">

  {/* IMAGE RIGHT */}
  <div className="w-1/2 max-[1120px]:w-full flex justify-center">
    <img
      src={img3}
      alt="food"
      className="
        w-full h-[80vh] max-[1120px]:h-auto
        object-cover rounded-[70px]
        transition-transform duration-700 ease-in-out
        hover:scale-105 hover:shadow-2xl
      "
    />
  </div>

  {/* CONTENT LEFT */}
  <div className="
    w-1/2 max-[1120px]:w-full
    flex flex-col items-center
    text-center
    gap-8
    px-6
  ">
    <h1 className="
      text-5xl max-[510px]:text-3xl uppercase
      tracking-wide
      transition-colors duration-300
      hover:text-amber-400
    ">
      OUR FOOD PHILOSOPHY
    </h1>

    <p className="
      max-w-[900px]
      leading-relaxed
      text-gray-200
      transition-all duration-300
      hover:scale-[1.02]
    ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip.
    </p>

    <p className="
      max-w-[900px]
      leading-relaxed
      text-gray-300
      transition-all duration-300
      hover:scale-[1.02]
    ">
      Conse qu atip sum, nec sagittis dolor sit amet, consectetur
      adipis eng elit.
    </p>
  </div>
</div>
<div className="w-full h-[70vh] bg-[#0f2323] flex flex-col justify-center items-center mt-2.5 px-6 text-center">
  
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl text-amber-400 font-serif italic mb-6">
    They say about us
  </h2>

  {/* Testimonial Text */}
  <p className="text-white text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore.
  </p>

  {/* Author */}
  <span className="text-gray-400 text-sm md:text-base tracking-widest">
    / BY DORA JOHNS / SOMALIER
  </span>
</div>
 <footer className="w-full bg-[#0a1c1c] text-white py-8 px-4 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left - Social Links */}
          <div className="flex gap-6 text-sm md:text-base uppercase tracking-widest max-[415px]:gap-2.5 max-[916px]:flex flex-col max-[768px]:flex flex-row">
            <a href="#" className="hover:text-[#cfa56e] transition-colors">Pinterest</a>
            <span className="text-[#cfa56e]">♦</span>
            <a href="#" className="hover:text-[#cfa56e] transition-colors">Facebook</a>
            <span className="text-[#cfa56e]">♦</span>
            <a href="#" className="hover:text-[#cfa56e] transition-colors">Instagram</a>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Fidalgo Logo" className="h-12 md:h-16 object-contain" />
          </div>

          {/* Right - Copyright */}
          <div className="text-sm md:text-base text-gray-400 text-center md:text-right">
            © 2024 Qode Interactive, All Rights Reserved
          </div>
        </div>
      </footer>

</>
  )
}

export default AboutUs
