import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';



const Layout: React.FC  = () => {
  return (
    <>
    <div className=" relative flex flex-col min-h-screen dark:bg-black">
    <div className='bg-gradient-to-r from-custom-green via-black to-custom-blue'></div>

      <Navbar />

      <div className='mx-4 sm:mx-10'>
      <Outlet />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
