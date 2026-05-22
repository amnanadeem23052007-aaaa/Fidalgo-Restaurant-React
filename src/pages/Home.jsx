import React from 'react';
import img1 from '../assets/h2.jpg';
import img2 from '../assets/h3.jpg';
import img3 from '../assets/girl.jpg'
import img4 from '../assets/glass.png'
import img5 from '../assets/wine.jpg'
import img6 from '../assets/menu.png'
import img7 from '../assets/cocktails.jpg'
import Logo from '../assets/logo.png'


const Home = () => {
  return (
    <div className="bg-[#0f2323] text-white">
      {/* Fullscreen Hero Section */}
      <div
        className="
          relative
          w-full h-screen
          bg-[url('/src/assets/h1.jpg')]
          bg-cover bg-center bg-no-repeat
        "
      >
        {/* Overlay */}
        <div className="w-full h-full bg-black/60 flex justify-center items-center relative px-4">
          {/* Center Text */}
          <h1 className="text-7xl tracking-widest text-center max-[897px]:text-5xl -mt-15 max-[712px]:-mt-0">
            GOOD TIMES GREAT TASTES
          </h1>

          {/* Reserve Circle */}
          <div className="absolute bottom-10 right-30 hidden md:block">
            <div className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center">
              {/* Border */}
              <div className="absolute inset-0 rounded-full border border-amber-400"></div>

              {/* Rotating Text */}
              <div className="absolute inset-0 animate-spin [animation-duration:12s]">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="
                        M 100,100
                        m -75,0
                        a 75,75 0 1,1 150,0
                        a 75,75 0 1,1 -150,0
                      "
                    />
                  </defs>
                  <text fill="white" fontSize="14" letterSpacing="4">
                    <textPath href="#circlePath">
                      RESERVE YOUR TABLE • RESERVE YOUR TABLE •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Icon */}
              <div className="w-[70px] h-[70px] border border-amber-400 flex items-center justify-center rotate-45">
                <div className="w-[30px] h-[30px] border border-amber-400 -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with small heading */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 md:py-32 md:px-20">
        <div className="mb-4">
          <svg
            className="mx-auto mb-4 w-16 h-16 stroke-current text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L15 8H9L12 2Z M2 12H22 M4 20H20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-3xl md:text-5xl font-light tracking-wide mb-4">
          FIDALGO IS FOR EVERYONE WHO COLLECTS BEAUTIFUL MOMENTS
        </h1>
        <p className="text-lg md:text-2xl text-[#cfa56e] italic">
          For the best memories
        </p>
      </section>

      {/* Chef Section with animations */}
      <section className="flex flex-col md:flex-row items-center justify-center  md:justify-between py-20 px-4 md:px-20 gap-8">
        {/* Text */}
       <div className="md:w-1/2 
                text-center md:text-left 
                opacity-0 translate-x-[-50px] animate-fadeInLeft animation-delay-500 
                flex flex-col justify-center" style={{marginTop:"-90px"}}>
  <h2 className="text-5xl sm:text-6xl md:text-7xl font-thin text-[#1f3a3a] mb-2">
    CHEF'S
  </h2>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 max-[768px]:ml-[90px] flex-wrap">
    ONLY THE FINEST FOOD & GREAT SERVICE
  </h3>
  <p className="text-gray-300 mb-6 text-base max-[768px]:ml-[90px] flex-wrap">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat.
  </p>
  <button className="self-center md:self-start border border-[#cfa56e] px-6 py-2 hover:bg-[#cfa56e] hover:text-black transition-colors">
    READ MORE
  </button>
</div>

        {/* Images */}
        <div className="md:w-1/2 relative flex justify-center items-center opacity-0 translate-x-[50px] animate-fadeInRight animation-delay-700 max-[768px]:hidden">
        <img
  src={img1}
  alt="Dish"
  className=" md:w-4/5 rounded-lg object-cover shadow-lg transform animate-float transition-transform duration-500 hover:scale-105"
/>

        <img
  src={img2}
  alt="Chef"
  className=" absolute w-1/3 top-10 md:-top-16 md:-left-16 rounded-lg shadow-lg transform animate-float-slow transition-transform duration-500 hover:scale-110"
/>

        </div>
      </section>
      {/* Cuisine Section */}
<section className="w-full py-20 px-4 md:px-20 overflow-hidden " >
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

    {/* Left Images */}
    <div className="relative w-full lg:w-1/2 opacity-0 translate-x-[-50px] animate-fadeInLeft animation-delay-500 max-[550px]:hidden">
      <img
        src={img3}
        alt="Cuisine Girl"
        className=" md:h-[400px] object-cover rounded-md shadow-lg max-[1024px]:w-[90%] ml-[10%] max-[550px]:hidden"
      />

      {/* Overlapping Glass */}
      <img
        src={img4}
        alt="Glass"
        className="absolute bottom-[-40px] right-[-80px] w-[180px] md:w-[200px] rounded-md shadow-xl animate-float max-[1024px]:hidden"
      />
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 opacity-0 translate-x-[50px] animate-fadeInRight animation-delay-700 flex justify-center items-center gap-[20px] max-[550px]:-mt-7 max-[420px]:flex justify-around items-center flex-col mr-8 gap-[20px]" style={{padding:"0px 40px"}}>
      <h2 className="text-[60px] md:text-[80px] font-serif tracking-widest text-white/10 max-[420px]:mr-12">
        CUISINE
      </h2>

      <h3 className="text-3xl md:text-4xl font-light tracking-wider -mt-6">
        OUR GOALS <br /> & HISTORY
      </h3>

      <p className="text-gray-300 leading-7 mt-6 max-w-lg" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>

      <button className="mt-8 border border-[#cfa56e] px-8 py-3 hover:bg-[#cfa56e] hover:text-black transition-all tracking-widest">
        READ MORE
      </button>
    </div>

  </div>
</section>

{/* Drinks & Menu Section */}
<section className="w-full bg-[#0f2323] py-20 px-4 md:px-20">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-light tracking-widest text-[#cfa56e]">
      DRINKS & MENU
    </h2>
    <p className="text-gray-400 mt-4">
      Discover fine wines, curated menus, and signature cocktails crafted for unforgettable moments.
    </p>
  </div>

  {/* Flex Images */}
  <div className="flex flex-wrap justify-center gap-8">
    {/* Slide 1 */}
    <div className="group relative overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
      <img
        src={img5}
        alt="Wine"
        className="w-full h-[420px] object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center">
        <h3 className="text-3xl font-light tracking-wide text-[#cfa56e] mb-2">Fine Wine</h3>
        <p className="text-sm text-gray-300 w-3/4">Premium blends for refined taste.</p>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="group relative overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
      <img
        src={img6}
        alt="Menu"
        className="w-full h-[420px] object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center">
        <h3 className="text-3xl font-light tracking-wide text-[#cfa56e] mb-2">Our Menu</h3>
        <p className="text-sm text-gray-300 w-3/4">Exquisite dishes made by top chefs.</p>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="group relative overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
      <img
        src={img7}
        alt="Cocktails"
        className="w-full h-[420px] object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center">
        <h3 className="text-3xl font-light tracking-wide text-[#cfa56e] mb-2">Signature Cocktails</h3>
        <p className="text-sm text-gray-300 w-3/4">Handcrafted drinks for every occasion.</p>
      </div>
    </div>
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
    </div>
    
    
  );
};

export default Home;
