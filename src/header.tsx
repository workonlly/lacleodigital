import { useState } from "react";
import './button.css'
import { Link, useNavigate } from "react-router-dom";
import useAppData from "./assets/data";
import { useAppDispatch } from './store/hooks';
import { setId } from './store/selectedIdSlice';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useAppData();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Handler for navigation to show page with id and promo slug
  const handleShowNav = (id: number, promo: string) => {
    dispatch(setId(id));
    const slug = promo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    navigate(`/show/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <header className="relative flex flex-row justify-between items-center h-20 md:mx-4 bg-white md:rounded-md">

      {/* Logo */}
      <a href="/"> <img
        src="/icon.png"
        alt="Logo"
        className="h-40 md:h-[200px]"
        width={180} // or whatever the actual pixel width is
        height={160}
        loading="eager"
      /></a>

      {/* Burger Icon (Mobile only) */}
      <button
        id="burger-btn"
        className="md:hidden flex mr-5 flex-col gap-1.5 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col text-center ">
          <Link to="/" className="py-2 font-medium hover:bg-black hover:text-white">Home</Link>
          <Link to="/services" className="py-2 font-medium hover:bg-black hover:text-white">Services</Link>
          <Link to="/casestudies" className="py-2 font-medium hover:bg-black hover:text-white">Case Studies</Link>
          <Link to="/aboutus" className="py-2 font-medium hover:bg-black hover:text-white">About Us</Link>
          <Link to="/blog" className="py-2 font-medium hover:bg-black hover:text-white">Blog</Link>
          <Link to="/contactus" className="py-2 font-medium hover:bg-black hover:text-white">Contact Us</Link>
          <Link to="/contactus">
          <div className="mt-4 mx-4 bg-black text-white py-2 rounded font-medium">
            BOOK A CONSULTATION
          </div></Link>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center gap-3 font-semibold  ">
        <Link to="/" className="nav-link text-center  py-2 px-4 rounded-md hover:text-white hover:bg-black">
          Home
        </Link>

        {/* Dropdown example */}
        <div className="relative group">
          <Link
            to="/services"
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
                <button
                  className="block px-4 py-2 whitespace-nowrap w-full text-left bg-transparent border-0 hover:bg-black hover:text-white"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleShowNav(item.id, item.promo)}
                >
                  {item.promo}
                </button>

                <div className="absolute left-full -top-2 hidden group-hover/subgroup:block bg-white  font-semibold shadow-lg rounded-md py-2 w-auto z-50">
                  {data.maindata2
                    .filter((sub) => sub.id === item.id)
                    .map((subItem) => (
                      <button
                        key={subItem.sid}
                        className="block px-4 py-2 text-black hover:bg-black hover:text-white whitespace-nowrap w-full text-left bg-transparent border-0"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleShowNav(subItem.sid, subItem.promo)}
                      >
                        {subItem.promo}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link to="/casestudies" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">Case Studies</Link>
        <Link to="/aboutus" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">About Us</Link>
        <Link to="/blog" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">Blog</Link>
        <Link to="/contactus" className="nav-link   py-2 px-4 rounded-md hover:text-white hover:bg-black">Contact Us</Link>
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