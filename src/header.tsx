import { useState } from "react";
import './button.css'
import { Link } from "react-router-dom";
import useAppData from "./assets/data";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data}=useAppData()

  

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
          <Link to="/?id=111" className="py-2 font-medium hover:bg-black hover:text-white">Home</Link>
          <Link to="/services?id=112" className="py-2 font-medium hover:bg-black hover:text-white">Services</Link>
          <Link to="/casestudies?id=113" className="py-2 font-medium hover:bg-black hover:text-white">Case Studies</Link>
          <Link to="/aboutus?id=114" className="py-2 font-medium hover:bg-black hover:text-white">About Us</Link>
          <Link to="/blog?id=115" className="py-2 font-medium hover:bg-black hover:text-white">Blog</Link>
          <Link to="/contactus?id=116" className="py-2 font-medium hover:bg-black hover:text-white">Contact Us</Link>
          <Link to="/contactus">
          <div className="mt-4 mx-4 bg-black text-white py-2 rounded font-medium">
            BOOK A CONSULTATION
          </div></Link>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center gap-3 font-semibold  ">
        <Link to="/?id=111" className="nav-link text-center  py-2 px-4 rounded-md hover:text-white hover:bg-black">
          Home
        </Link>

        {/* Dropdown example */}
        <div className="relative group">
  <Link
    to="/services?id=112"
    className="nav-link  py-2 px-4 rounded-md hover:text-white hover:bg-black flex items-center"
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
  </Link>

  <div className="absolute hidden group-hover:block bg-white  shadow-lg font-semibold rounded-md py-2 w-56 z-50 top-full left-0">
    {data.maindata.map((item) => (
      <div key={item.id} className="relative group/subgroup hover:bg-black hover:text-white">
        <Link
          to={`/show?id=${item.id}`}
          className="block px-4 py-2  whitespace-nowrap"
        >
          {item.promo}
        </Link>

        <div className="absolute left-full -top-2 hidden group-hover/subgroup:block bg-white  font-semibold shadow-lg rounded-md py-2 w-auto z-50">
          {data.maindata2
            .filter((sub) => sub.id === item.id)
            .map((subItem) => (
              <Link
                key={subItem.sid}
                to={`/show?id=${subItem.sid}`}
                className="block px-4 py-2 text-black hover:bg-black hover:text-white whitespace-nowrap"
              >
                {subItem.promo}
              </Link>
            ))}
        </div>
      </div>
    ))}
  </div>
</div>

        <Link to="/casestudies?id=113" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">Case Studies</Link>
        <Link to="/aboutus?id=114" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">About Us</Link>
        <Link to="/blog?id=115" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">Blog</Link>
        <Link to="/contactus?id=116" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">Contact Us</Link>
      </div>

      {/* CTA Button (Desktop only) */}
         <div className="translate-y-[1px] right-5 g-hov w-[50%] sm:w-[30%] md:w-[16%] h-[60%] z-30 g-hov hidden md:block">
     <Link to="/contactus">
      <div className="button-1"></div>
      <div className="button-2"></div>
     <div className="button-3 flex justify-center items-center text-sm sm:text-base font-medium text-white">BOOK A CONSULTATION</div>
    </Link>
     </div>

    </header>
  );
}