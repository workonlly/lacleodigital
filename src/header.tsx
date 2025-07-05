import { useState } from "react";
import './button.css'
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex flex-row justify-between items-center h-20 mx-4 bg-white md:rounded-md">
      {/* Logo */}
      <img
        src="/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png"
        alt="Logo"
        className="h-14 md:h-[200px]"
      />

      {/* Burger Icon (Mobile only) */}
      <button
        id="burger-btn"
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col text-center py-4">
          <a href="/?id=111" className="py-2 font-medium hover:bg-black hover:text-white">Home</a>
          <a href="/dista/services/index.html?id=112" className="py-2 font-medium hover:bg-black hover:text-white">Services</a>
          <a href="/dista/case/index.html?id=113" className="py-2 font-medium hover:bg-black hover:text-white">Case Studies</a>
          <a href="/dista/aboutus/index.html?id=114" className="py-2 font-medium hover:bg-black hover:text-white">About Us</a>
          <a href="/dista/blog/index.html?id=115" className="py-2 font-medium hover:bg-black hover:text-white">Blog</a>
          <a href="/dista/contactus/index.html?id=116" className="py-2 font-medium hover:bg-black hover:text-white">Contact Us</a>
          <div className="mt-4 mx-4 bg-black text-white py-2 rounded font-medium">
            BOOK A CONSULTATION
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center gap-3">
        <a href="/?id=111" className="nav-link text-center font-bold py-2 px-4 rounded-md hover:text-white hover:bg-black">
          Home
        </a>

        {/* Dropdown example */}
        <div className="relative group">
          <a
            href="/dista/services/index.html?id=112"
            className="nav-link font-bold py-2 px-4 rounded-md hover:text-white hover:bg-black flex items-center"
          >
            Services
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56 z-50 top-full left-0">
            {/* Dropdown items here */}
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Marketing</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Development</a>
          </div>
        </div>

        <a href="/dista/case/index.html?id=113" className="nav-link font-bold  py-2 px-4 rounded-md hover:text-white hover:bg-black">Case Studies</a>
        <a href="/dista/aboutus/index.html?id=114" className="nav-link font-bold  py-2 px-4 rounded-md hover:text-white hover:bg-black">About Us</a>
        <a href="/dista/blog/index.html?id=115" className="nav-link font-bold  py-2 px-4 rounded-md hover:text-white hover:bg-black">Blog</a>
        <a href="/dista/contactus/index.html?id=116" className="nav-link font-bold  py-2 px-4 rounded-md hover:text-white hover:bg-black">Contact Us</a>
      </div>

      {/* CTA Button (Desktop only) */}
         <div className="translate-y-[1px] right-5 g-hov w-[50%] sm:w-[30%] md:w-[16%] h-[60%] z-30 g-hov hidden md:block">
     <a href="/dista/contactus/index.html">
      <div className="button-1"></div>
      <div className="button-2"></div>
     <div className="button-3 flex justify-center items-center text-sm sm:text-base font-medium text-white">BOOK A CONSULTATION</div>
    </a>
     </div>

    </header>
  );
}