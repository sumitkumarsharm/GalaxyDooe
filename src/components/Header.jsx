import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img2.webp')" }}
    >
      <Navbar />
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold">
          Rentals. Homes. Agents. Loans.
        </h2>
        <div className="space-x-6 mt-16 ">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-transparent border-2 border-transparent hover:border-blue-400 px-8 py-2 rounded transition-all duration-300"
          >
            Project
          </a>
          <a
            href="#contacts"
            className="bg-blue-500 hover:bg-transparent border-2 border-transparent hover:border-blue-400 px-8 py-2 rounded transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
