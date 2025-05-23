import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TLB.png";

const Header = () => {
  return (
    <div className="flex py-2 px-12 justify-between bg-gradient-to-r from-emerald-500 to-emerald-900">
      <div>
        <img src={logo} alt="not found" className="w-20 h-18" />
      </div>
      <div className="flex gap-14 items-center font-mono text-xl text-gray-200">
        <Link to="/" className=" hover:text-red-800 font-semibold">
          Home
        </Link>
        <Link to="about" className=" hover:text-red-800 font-semibold">
          About Us
        </Link>
        <Link to="services" className=" hover:text-red-800 font-semibold">
          Services
        </Link>
        <Link to="testimonial" className=" hover:text-red-800 font-semibold">
          Testimonial
        </Link>
        <Link to="media" className=" hover:text-red-800 font-semibold">
          Gallery
        </Link>
        <Link to="contact" className=" hover:text-red-800 font-semibold">
          Contact
        </Link>
      </div>
      <div>
        <button className="mt-4 w-36 text-slate-950 font-semibold text-lg h-11 rounded-xl bg-gradient-to-r from-teal-400 to-yellow-200 transition-transform duration-200 transform hover:scale-105">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
