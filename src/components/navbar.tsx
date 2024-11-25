import { useState } from 'react';
import { motion } from 'framer-motion';

import svg from '../assets/cascadeUiIconblack.svg'
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 backdrop-blur-sm bg-white/5 dark:bg-black/5 w-full z-50 p-2'>
    <nav className=" mx-3 sm:mx-10">
      <div className="w-full">
        <div className="relative flex items-center justify-between h-14">
          {/* Left side (Logo) */}
          <Link to={'/'}>
          <div className="flex-shrink-0 flex items-center">
          
            <img src={svg} alt='Cascade UI logo' className="h-8 w-8 mr-2 " />

            <h1 className="dark:text-white text-2xl font-semibold">Cascade UI</h1>
          
          </div>
          </Link>
          {/* Centered Menu Links (hidden on small screens) */}
          <div className="hidden sm:flex sm:flex-1 justify-center">
            <div className="flex  px-5">
              <NavLink
                to="/"
                className=  {({isActive})=>isActive?"text-blue-500  hover:text-primary px-3 py-2 rounded-md text-m font-[400] hover:text-blue-500":"dark:text-gray-100  hover:text-primary px-3 py-2 rounded-md text-m font-[400] hover:text-blue-500"}
              >
                Home
              </NavLink>
              <a
                href="https://uidocs.pages.dev/components/animatedbutton/"
                className="dark:text-gray-100  hover:text-primary px-3 py-2 rounded-md text-m font-[400] hover:text-blue-500"
                
              >
                Components
              </a>
              <NavLink
                to="/aboutus"
                className=  {({isActive})=>isActive?"text-blue-500  hover:text-primary px-3 py-2 rounded-md text-m font-[400] hover:text-blue-500":"dark:text-gray-100  hover:text-primary px-3 py-2 rounded-md text-m font-[400] hover:text-blue-500"}
              >
                About Us
              </NavLink>
            
            </div>
          </div>

          {/* Right side button (Login) */}
          <div className="hidden sm:flex items-center">
          <a href='https://github.com/Rohit-00/cascade' target='_blank'>
          <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-2 py-1 text-sm bg-white dark:bg-black rounded-[6px]  relative group transition duration-200 text-black dark:hover:text-black hover:text-white dark:text-white hover:bg-transparent">
            Star on Github
          </div>
        
          </button>
          </a>
            <a href='https://x.com/byir0nic' target='_blank'>
        
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-300 hover:text-primary  block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/components"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Components
          </Link>
          <Link
            to="/aboutus"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
       
        </div>
      </motion.div>
    </nav>
    </div>
  );
}