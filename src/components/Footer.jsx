import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* ----- Company Description ----- */}
        <div>
          <img className="w-16" src={assets.logo} alt="" />
          <p className="text-gray-400 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* ----- Company Links ----- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#header" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* ----- Newsletter Subscription ----- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ----- Copyright ----- */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        Copyright © 2024{" "}
        <span className="text-white font-semibold">Sumit.dev</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
}
