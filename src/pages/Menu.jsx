import React from 'react'
import img1 from '../assets/m1.jpg'
import img2 from '../assets/m2.jpg'
import img3 from '../assets/m3.jpg'
import img4 from '../assets/h2.jpg'
import img5 from '../assets/m5.jpg'
import img6 from '../assets/menu.png'
import Logo from '../assets/logo.png'

const Menu = () => {
  return (
    <div className="bg-[#0f2323] text-white">

      {/* MENU HERO */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={img6}
          alt="Menu Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="relative text-6xl md:text-7xl tracking-widest animate-fadeDown max-[370px]:text-5xl">
          OUR MENU
        </h1>
      </section>

      {/* MENU INTRO */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto animate-fadeUp">
        <p className="text-gray-300 text-lg leading-8">
          Our menu is a celebration of flavor, crafted with passion and the finest ingredients.
          Every dish is prepared to give you a memorable dining experience.
        </p>
      </section>

      {/* MENU ITEMS */}
      <section className="py-20 px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <MenuCard img={img1} title="Gourmet Filled Croissant" price="$18" />
          <MenuCard img={img2} title="Sushi Roll" price="$15" />
          <MenuCard img={img3} title="Cocktail" price="$22" />
          <MenuCard img={img4} title="Red Pepper Soup" price="$12" />
          <MenuCard img={img5} title="Pizza" price="$16" />
          <MenuCard img={img6} title="Duck Breast" price="$25" />

        </div>
      </section>

      {/* FOOTER (As it is, no change) */}
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

    </div>
  )
}

const MenuCard = ({ img, title, price }) => {
  return (
    <div className="group bg-[#122f2f] rounded-xl overflow-hidden shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl animate-fadeUp">
      
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl tracking-wide mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">
          Prepared with fresh ingredients and rich flavors.
        </p>
        <span className="text-[#cfa56e] text-xl font-semibold">{price}</span>
      </div>

    </div>
  )
}

export default Menu
