import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <div className=" w-full">
      <div className="max-w-7xl  mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-[124px] h-[32px] ml-20" />

        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/about-us" className="text-white hover:underline">
            About Us
          </Link>
          <Link to="/services" className="text-white hover:underline">
            Solution
          </Link>
          <Link to="/services" className="text-white hover:underline">
            Support
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
