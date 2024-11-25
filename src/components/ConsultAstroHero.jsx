import React from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const HeroSection = () => {

  

  return (
    <div className="bg-white py-6 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          CONSULT ASTROLOGER
        </h1>
      </div>

      {/* Chat Button & Search Bar */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4  mb-4">
        {/* Chat Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md text-2xl">
          Chat 
        </button>

        <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-6 rounded-md text-2xl">
          Talk to our Experts
        </button>

          {/* Sort Icon */}
          <button className="flex items-center justify-center px-4  border border-gray-400 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            < FaSortAmountDown className="text-gray-500 h-10 w-10  py-2 px-2 " />
          </button>
          

          {/* Search Bar */}
        <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search By Name ..."
            className="flex-1 px-4 py-2 focus:outline-none"
          />

          {/* Search Icon */}
          <button className="bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center h-10 px-4">
            < FaSearch className="text-black h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
