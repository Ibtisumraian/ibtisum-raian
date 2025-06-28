import React from "react";
import { NavLink } from "react-router";
import './nav.css'

const Navbar = () => {
    const links = <>
        <NavLink to='/'><a href="">Home</a></NavLink>
        <NavLink to='/h'><a href="">About Me</a></NavLink>
        <NavLink to='/h'><a href="">Skills</a></NavLink>
        <NavLink to='/h'><a href="">Projects</a></NavLink>
        {/* <NavLink to='/h'><a href="">Contacts</a></NavLink> */}
    </>
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar  text-white w-10/12 mx-auto py-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm flex items-center gap-5 text-gray-600 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div  className="flex items-center">
            <img
            className="w-16"
             src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1751115799/logo00-removebg-preview_vmyien.png" alt="" />
            <a className=" text-2xl font-bold">Ibtisum Raian</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center gap-5 text-xl px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" py-2 px-4 rounded-4xl drop-shadow-xl/20 text-xl bg-gradient-to-b from-[#e9615e]  to-[#ec9956]">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
