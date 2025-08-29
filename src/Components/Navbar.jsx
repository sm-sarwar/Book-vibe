import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {

    const Links = <>
            <li className="text-[rgba(19,19,19,0.8)] text-lg"><NavLink to='/'>Home</NavLink></li>
            <li className="text-[rgba(19,19,19,0.8)] text-lg"><NavLink to='/listed-books'>Listed Books</NavLink></li>
            <li className="text-[rgba(19,19,19,0.8)] text-lg"><NavLink to='/pages-to-read'>Pages To Read</NavLink></li>
    </>
  return (
    <div>
      <div className="navbar bg-base-100 py-5">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {Links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <a className="md:py-3 py-2 md:px-5 px-3 text-sm text-white md:font-semibold font-normal rounded bg-[#23BE0A]">Sign In</a>
          <a className="md:py-3 py-2 md:px-5 px-3 text-sm text-white md:font-semibold font-normal rounded bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
