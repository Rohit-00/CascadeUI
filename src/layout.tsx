import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';



const Layout: React.FC  = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className='mx-10'>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
