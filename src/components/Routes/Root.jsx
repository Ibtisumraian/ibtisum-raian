import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#62393c]  to-[#181e41]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
