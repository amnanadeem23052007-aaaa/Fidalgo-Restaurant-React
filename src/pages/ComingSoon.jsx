import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/cocktails.jpg";

const ComingSoon = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 md:px-12 max-w-[100vw] overflow-x-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Top bar / logo section */}
        <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 sm:px-12 md:px-20 text-sm tracking-widest font-light overflow-x-hidden">
          <div className="border-t border-gray-400 flex-1 hidden md:block"></div>
          <div className="text-lg md:text-xl font-serif mx-6">FIDALGO</div>
          <div className="border-t border-gray-400 flex-1 hidden md:block"></div>
        </div>

        <p className="text-sm tracking-[0.25em] mb-3 md:mb-5 mt-20 md:mt-32 font-light">
          BAR EST. 1989
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight">
          <span className="text-white tracking-widest">COMING</span>
          <span className="block md:inline font-[cursive] text-4xl md:text-6xl lg:text-7xl italic text-white ml-2">
            Soon
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-200 text-base md:text-lg mt-6 leading-relaxed">
          Proins gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit de conse qu atip
        </p>

        {/* Instagram Button */}
        <div className="mt-10">
          <a
            href="#"
            className="text-sm tracking-widest relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-500"
          >
            INSTAGRAM
          </a>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 w-full text-center text-xs text-gray-300">
          © 2024 Qode Interactive
        </footer>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
