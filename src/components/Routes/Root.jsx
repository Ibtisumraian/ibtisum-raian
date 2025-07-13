import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
  const loc = useLocation()
  console.log(loc);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#62393c]  to-[#181e41]">
      {loc.pathname === '/Resume' ? ' ' : <Navbar />}      
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
