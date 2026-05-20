// src/pages/ContactUs.js
import React from 'react';
import Slider from "react-slick";
import img1 from '../assets/c1.jpg';
import img2 from '../assets/h9.jpg'; 
import img3 from '../assets/h10.png';
import img4 from '../assets/h11.jpg';
import img5 from '../assets/h12.png';
import img6 from '../assets/h.jpg';
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logo from '../assets/logo.png'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      
    ]
  };

  return (
    <div className="w-full h-[80%] px-4" style={{overflowX:"hidden"}}>
      <Slider {...settings}>
        {[img2, img3, img4, img5, img6].map((img, index) => (
          <div key={index} className="px-2">
            <img 
              src={img} 
              alt={`slide-${index}`} 
              className="w-[80%] h-64 object-cover rounded-md max-[640px]:w-[100%]" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ContactUs = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div
        className="w-full h-[90vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black/50 text-white"></div>
        <div className="relative z-10 text-center text-white px-4 md:px-20 flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">FIDALGO NEWSLETTER</h1>
          <p className="mb-4">Subscribe to receive the latest news, announcements, and special offers</p>

          <div className="flex justify-center items-center max-w-md mx-auto text-white max-[400px]:w-[80%]">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-white rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-2 rounded-r-md hover:bg-gray-200 transition-colors flex-shrink-0">
              SIGN UP
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-6 text-sm uppercase tracking-widest max-[400px]:gap-1">
            <span className="hover:text-orange-400 cursor-pointer">Facebook</span>
            <span className="text-orange-400">♦</span>
            <span className="hover:text-orange-400 cursor-pointer">Instagram</span>
            <span className="text-orange-400">♦</span>
            <span className="hover:text-orange-400 cursor-pointer">Pinterest</span>
          </div>
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="w-full h-[80vh] bg-blue-950 text-white flex flex-col gap-[30px] max-[640px]:justify-center items-center">
        <div className="w-full h-[20%] flex items-center justify-center ">
          <h1 className="text-5xl max-[640px]:text-3xl">CONNECT WITH US</h1>
        </div>

        {/* Carousel */}
        <ImageCarousel  />
      </div>
        <section className="bg-[#04091d] text-gray-300 py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between text-center md:text-left divide-y-0 md:divide-x divide-gray-600">

    {/* Contact Us */}
    <motion.div
      className="flex-1 min-w-[280px] md:min-w-[250px] lg:min-w-[300px] px-6 py-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-white text-xl tracking-[0.25em] mb-6">
        CONTACT US
      </h3>
      <p className="text-lg">T. +12 344 056789</p>
      <p className="text-lg">M. fidalgo@example.com</p>
    </motion.div>

    {/* Address */}
    <motion.div
      className="flex-1 min-w-[280px] md:min-w-[250px] lg:min-w-[300px] px-6 py-8 border-t md:border-t-0 md:border-l border-gray-600"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-white text-xl tracking-[0.25em] mb-6">
        ADDRESS
      </h3>
      <p className="text-lg">Piazza Della Signoria, 12</p>
      <p className="text-lg">21562 · Firenze · Italy</p>
    </motion.div>

    {/* Opening Hours */}
    <motion.div
      className="flex-1 min-w-[280px] md:min-w-[250px] lg:min-w-[300px] px-6 py-8 border-t md:border-t-0 md:border-l border-gray-600"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-white text-xl tracking-[0.25em] mb-6">
        OPENING HOURS
      </h3>
      <p className="text-lg">Everyday : From 12.30 To 23.00</p>
      <p className="text-lg">Kitchen Closes At 22.00</p>
    </motion.div>

  </div>
</section>
 <footer className="w-full bg-[#0a1c1c] text-white py-8 px-4 md:px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 ">
        
        {/* Left - Social Links */}
        <div className="flex gap-6 text-sm md:text-base uppercase tracking-widest max-[415px]:gap-2.5 max-[916px]:flex flex-col max-[768px]: flex flex-row">
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
        <div className="text-sm md:text-base text-gray-400 text-center md:text-right ">
          © 2024 Qode Interactive, All Rights Reserved
        </div>
      </div>
    </footer>

    </>
  );
};

export default ContactUs;
