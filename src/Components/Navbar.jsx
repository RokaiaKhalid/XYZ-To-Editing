
import { useState } from 'react';
import logo from '../assets/logo.png';
// import link from react-scroll
import {Link} from 'react-scroll'
// React Icons
import { MdOutlineLanguage } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "features" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  } 
  return (
    <>
      <nav className='bg-white md:px-12 py-3 max-w-sceen-2xl mx-auto text-pretty fixed top-0 right-0 left-0'>
      <div className='container mx-auto flex justify-between items-center font-medium text-xl'>
        <div className='flex justify-between items-center gap-14'>
          <a href="" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
            <img src={logo} className='w-16 inline-block items-start' />
            <span>XYZ</span>
          </a>
          {/* Showing navitem using map */}
          <ul className='hidden md:flex'>
            {
              // eslint-disable-next-line react/jsx-key
              navItems.map(({ link, path }) => <li className=' hover:text-gray-300 cursor-pointer ' key={path}><Link activeClass='active' spy={true} smooth={true} offset={-100} to={path}>{link}</Link></li>)
            }
          </ul>
        </div>
        {/* language and sign up */}
        <div className='space-x-12 hidden md:flex items-end'>
          <a className='hidden lg:flex items-center hover:text-secondary'><MdOutlineLanguage /><span>Language</span></a>
          <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-300'>Sign Up</button>
        </div>
        {/* menu btn, only display on mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:autline-none focus:text-gray-300'>
            {isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)}
            </button>
        </div>
      </div>
      </nav>

      {/* navitems for Mobile Design */}
      <div className={`space-y-4 px-4 pt-20 pb-6 bg-secondary opacity-90 ${isMenuOpen ? "block fixed right-0 left-0" : "hidden"}`}>
        <ul>
          {
              navItems.map(({ link, path }) => <li className=' text-white hover:text-gray-300 text-xl p-2 cursor-pointer' key={path}><Link activeClass='active' spy={true} smooth={true} offset={-100} to={path} className='block' onClick={toggleMenu}>{link}</Link></li>)
          }
        </ul>
      </div>
    </>
  )
}

export default Navbar
