import React from "react";
import {bg, card, card2, card3, card4  } from "../assets";

const HeroSection = () => {

  return (
    <div className="relative bg-gray-100">
  {/* Background Section */}
  <div className="relative text-center text-white">
    <img 
      src={bg} 
      alt="Astrology Symbol" 
      className="mt-5 w-full object-cover h-60 sm:h-80 md:h-auto" 
    />
    {/* Welcome Text */}
    <h1 className="text-xl sm:text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 ">
      WELCOME TO JYOTISH ALOY
    </h1>
  </div>

  {/* Cards Section */}
  <div className="lg:mt-[-150px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Card 1 */}
    <a href="/consult-astrologer" className="bg-yellow-200 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
      <img
        src={card} 
        alt="Consult Astrologer"
        className="w-12 h-12 mb-2"
      />
      <p className="font-bold text-center">Consult Astrologer</p>
    </a>

    {/* Card 2 */}
    <a href='/horoscope'className="bg-yellow-200 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
      <img
        src={card2} 
        alt="Horoscope Check"
        className="w-12 h-12 mb-2"
      />
      <p className="font-bold text-center">Horoscope Check</p>
    </a>

    {/* Card 3 */}
    <a href='/Kundli-matching' className="bg-yellow-200 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
      <img
        src={card3} 
        alt="Kundli Matching"
        className="w-12 h-12 mb-2"
      />
      <p className="font-bold text-center">Kundli Matching</p>
    </a>

    {/* Card 4 */}
    <a href='/store'className="bg-yellow-200 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
      <img
        src={card4} 
        alt="Store"
        className="w-12 h-12 mb-2"
      />
      <p className="font-bold text-center">Store</p>
    </a>
  </div>
</div>

  );
};

export default HeroSection;
