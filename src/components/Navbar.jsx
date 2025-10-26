import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent ">
        <img className="w-10" src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#header" className="cursor-pointer hover:text-red-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-red-400">
            About
          </a>
          <a href="#projects" className="cursor-pointer hover:text-red-400">
            Property
          </a>
          <a href="#testimonial" className="cursor-pointer hover:text-red-400">
            Testimonial
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded hover:bg-red-400 transition-all duration-300  hover:text-white">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setShowMenu(true)}
          className="md:hidden w-7 "
          alt=""
        />
      </div>
      {/* -----------mobile menu------------ */}
      <div
        className={`md:hidden ${
          showMenu ? "fixed w-full" : "h-0 w-0 "
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6"
            onClick={() => setShowMenu(false)}
            alt="cross icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
