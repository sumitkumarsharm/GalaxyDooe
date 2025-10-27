import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import SignupForm from "./SignupForm"; // 👈 Import it

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // 👈 New state for signup

  useEffect(() => {
    document.body.style.overflow = showMenu || showSignup ? "hidden" : "auto";
  }, [showMenu, showSignup]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img className="w-10" src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="hover:text-red-400">Home</a>
          <a href="#About" className="hover:text-red-400">About</a>
          <a href="#projects" className="hover:text-red-400">Property</a>
          <a href="#testimonial" className="hover:text-red-400">Testimonial</a>
        </ul>
        <button
          onClick={() => setShowSignup(true)} // 👈 open signup form
          className="hidden md:block bg-white px-8 py-2 rounded hover:bg-red-400 transition-all duration-300 hover:text-white"
        >
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setShowMenu(true)}
          className="md:hidden w-7 cursor-pointer"
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-white z-40 transition-all">
          <div className="flex justify-end p-6">
            <img
              src={assets.cross_icon}
              className="w-6 cursor-pointer"
              onClick={() => setShowMenu(false)}
              alt="close"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 text-lg font-medium">
            <a onClick={() => setShowMenu(false)} href="#Header">Home</a>
            <a onClick={() => setShowMenu(false)} href="#About">About</a>
            <a onClick={() => setShowMenu(false)} href="#Projects">Projects</a>
            <a onClick={() => setShowMenu(false)} href="#Testimonials">Testimonials</a>
          </ul>
        </div>
      )}

      {/* Signup Form Overlay */}
      {showSignup && <SignupForm onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default Navbar;
