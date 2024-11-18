import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';



const Layout: React.FC  = () => {
  return (
    <>
    <div className="absolute h-[40rem] sm:w-[45rem] inset-0 bg-gradient-to-b from-transparent to-white/30 dark:to-black/30 pointer-events-none z-10"></div>
    <div className="flex flex-col min-h-screen dark:bg-black">
       
      <Navbar />
      <div className='mx-6 sm:mx-10'>
      <Outlet />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
