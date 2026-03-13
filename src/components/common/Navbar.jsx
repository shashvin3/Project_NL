import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";
import star from "../../assets/star.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-100">
      <div className="relative w-full bg-white px-15 flex items-center justify-between shadow-lg">
        <Link to="/">
          <img
            src={logo}
            alt="NavLakshya Logo"
            className="h-20 w-38 object-contain"
          />
        </Link>
         
         {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className={`relative group text-grayone font-semibold text-sm font-jakarta py-7 transition-colors duration-200 hover:text-blueone ${isActive('/') ? 'text-blueone' : ''}`}>
              <Link to="/">Home</Link>
              <div className={`absolute bottom-0 w-full h-0.5 bg-blueone transition-all duration-200 ${isActive('/') ? 'block' : 'hidden'}`}></div>
            </li>
           <li className={`relative group text-grayone font-semibold text-sm font-jakarta py-7 transition-colors duration-200 hover:text-blueone ${isActive('/programs') ? 'text-blueone' : ''}`}>
              <Link to="/programs" className="">Programs</Link>
              <div className={`absolute bottom-0 w-full h-0.5 bg-blueone transition-all duration-200 ${isActive('/programs') ? 'block' : 'hidden'}`}></div>
            </li>
           <li className={`relative group text-grayone font-semibold text-sm font-jakarta py-7 transition-colors duration-200 hover:text-blueone ${isActive('/about') ? 'text-blueone' : ''}`}>
              <Link to="/about">About Us</Link>
              <div className={`absolute bottom-0 w-full h-0.5 bg-blueone transition-all duration-200 ${isActive('/about') ? 'block' : 'hidden'}`}></div>
            </li>
           <li className={`relative group text-grayone font-semibold text-sm font-jakarta py-7 transition-colors duration-200 hover:text-blueone ${isActive('/contact') ? 'text-blueone' : ''}`}>
              <Link to="/contact">Contact</Link>
              <div className={`absolute bottom-0 w-full h-0.5 bg-blueone transition-all duration-200 ${isActive('/contact') ? 'block' : 'hidden'}`}></div>
            </li>
          </ul>

          <Link to="/programs ">
          <button className="flex items-center font-jakarta tracking-wide space-x-2 bg-linear-to-r from-blueone to-yellowone text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-blue-200 hover:scale-105 transition-transform active:scale-95">
            <img
              src={star}
              alt="Star Icon"
              className="object-contain h-7 w-7"
            />            
             Apply Now         
          </button>
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf2f9]/80 border border-[#e0e5eb]/50">
        {isOpen? 
        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-5 w-5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>)
        :(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
        )}
        </button>
      </div>

          {/* Mobile Buttons*/}
            <div className = {`md:hidden ${isOpen? "flex" : "hidden"} flex-col gap-4 p-8 bg-white`}>
            <ul className="flex flex-col gap-2">
              <Link to="/" onClick={closeMenu}>
              <li className={`font-bold text-xl font-jakarta flex justify-between border-b border-grayone/40 py-4 transition-colors duration-200 ${isActive('/') ? 'text-blueone' : 'text-[#0c121a]'}`}>
                Home
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-grayone"><path d="m9 18 6-6-6-6" /></svg>
              </li>
              </Link>
              <Link to="/programs">
              <li onClick={closeMenu} className={`font-bold text-xl font-jakarta flex justify-between border-b border-grayone/40 py-4 transition-colors duration-200 ${isActive('/programs') ? 'text-blueone' : 'text-[#0c121a]'}`}>
              Programs
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-grayone"><path d="m9 18 6-6-6-6" /></svg>
              </li>
              </Link>
              <Link to="/about">
              <li onClick={closeMenu} className={`font-bold text-xl font-jakarta flex justify-between border-b border-grayone/40 py-4 transition-colors duration-200 ${isActive('/about') ? 'text-blueone' : 'text-[#0c121a]'}`}>
                About Us
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-grayone"><path d="m9 18 6-6-6-6" /></svg>
              </li>
              </Link>
              <Link to="/contact">
              <li onClick={closeMenu} className={`font-bold text-xl font-jakarta flex justify-between border-b border-grayone/40 py-4 transition-colors duration-200 ${isActive('/contact') ? 'text-blueone' : 'text-[#0c121a]'}`}>
                Contact
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-grayone"><path d="m9 18 6-6-6-6" /></svg>
              </li>
              </Link>
              <Link to="/programs" onClick={closeMenu}>
              <li className="mt-8 h-14 flex items-center justify-center rounded-2xl bg-blueone text-lg font-bold text-white shadow-lg">
                Explore Scholarship Program        
              </li>
              </Link>
            </ul>
            </div>

    </nav>
  );
}

export default Navbar;
