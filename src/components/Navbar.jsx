import React, { useState } from "react";
import {logo1} from "../assets"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo1} alt="logo" className="h-20" />

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/consult-astrologer" className="hover:text-gray-300">Consult Astrologer</a>
          <a href="/kundli-matching" className="hover:text-gray-300">Kundli Matching</a>
          <a href="/horoscope" className="hover:text-gray-300">Horoscope</a>
          <a href="/blog" className="hover:text-gray-300">Blog</a>
          <a href="/store" className="hover:text-gray-300">Store</a>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <a href="/login" className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition">
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} flex-col space-y-4 mt-4`}>
        <a href="/" className="block hover:text-gray-300">Home</a>
        <a href="/consult-astrologer" className="block hover:text-gray-300">Consult Astrologer</a>
        <a href="/kundli-matching" className="block hover:text-gray-300">Kundli Matching</a>
        <a href="/horoscope" className="block hover:text-gray-300">Horoscope</a>
        <a href="/blog" className="block hover:text-gray-300">Blog</a>
        <a href="/store" className="block hover:text-gray-300">Store</a>
        <a href="/login" className="block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


