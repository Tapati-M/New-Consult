import React from "react";
import { kundli } from '../assets'

const KundliMatching = () => {
  return (
    <div className="flex flex-col items-center bg-white pt-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-center">KUNDLI MATCHING</h1>

      {/* Main Content Container */}
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between w-full max-w-5xl">
        <div className="flex flex-col">
          {/* Kundli Image */}
         <a href="/Kundli-matching">
         <img
            src={kundli} 
            alt="Kundli Scroll"
            className="w-96 h-auto mb-6"
          />
         </a>
        </div>

        {/* Right Side - Login */}
        <div className="flex flex-col items-center bg-gray-100 mt-16 px-8 py-6 rounded-lg shadow-lg">
          <p className="text-gray-500 text-sm mb-4">
            Please login to check your saved horoscope!
          </p>
          {/* Login Button */}
          <a
            href="/login"
            className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Login
          </a>
        </div>
      </div>
      
      <p className="text-xl font-semibold ">
        Match Your Kundli Right Now !!!
      </p>
    </div>
  );
};

export default KundliMatching;
