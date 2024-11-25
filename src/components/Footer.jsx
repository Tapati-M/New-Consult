import React from "react";
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-7">
      
        {/* About Jyotish Aloy */}
        <div className="flex flex-col justify-center ml-10 col-span-2">
          <h3 className="text-yellow-500 text-2xl font-bold mb-4">ABOUT JYOTISH ALOY</h3>
          <p className="text-md mb-4 ml-[-40px] ">
            Unlock the secrets of the stars and discover your cosmic potential.
            Our expert astrology tools and insights help you navigate love,
            career, and life's journey.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 py-2">
        {/* Horoscope Links */}
        <div>
          <h3 className="text-white font-bold mb-2">HOROSCOPE</h3>
          <ul className="space-y-2 ">
            <li><a href="/horoscope" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Today’s Horoscope</a></li>
            <li><a href="/horoscope" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Weekly Horoscope</a></li>
            <li><a href="/horoscope" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Monthly Horoscope</a></li>
            <li><a href="/horoscope" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Yearly Horoscope</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-white font-bold mb-2">IMPORTANT LINKS</h3>
          <ul className="space-y-2">
            <li><a href="/blog" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Blog</a></li>
            <li><a href="/store" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Store</a></li>
            <li><a href="/Kundli-matching" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Kundli Matching</a></li>
            <li><a href="/consult-astrologer" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Consult with Astrologer</a></li>
          </ul>
        </div>

        {/* Corporate Infos */}
        <div>
          <h3 className="text-white font-bold mb-2">CORPORATE INFOS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400">About Us</a></li>
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Disclaimers</a></li>
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Pricing</a></li>
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Refund & Cancellation Policy</a></li>
          </ul>
        </div>

        { /*Astrologer*/}
        <div>
            <h3 className="text-white font-bold mb-2">ASTROLOGER</h3>
            <ul>
            <p>To register on Jotish Aloy <br /> as an astrologer contact us <br /> on<p>+91934XXXXXXX</p></p>
            </ul>   
        </div>

        {/* security*/}
        <div className="list-none">
            <h3 className="text-white font-bold mb-2">SECURITY</h3>
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400">Privacy & Confidentiality</a></li>
            <li><a href="#" className="hover:text-lg hover:text-amber-200 transition-all duration-400"> Verified Astrologers</a></li>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white font-bold mb-2">CONTACT US</h3>
          <p className="">Contact - contact@jyotishaloy.com</p>

        </div>
      </div>
      <div className="flex justify-center items-center mt-8 font-semibold cursor-pointer">
        <p className="text-3xl font-bold text-white">Connected With Us On</p>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <div className="flex  items-center justify-center space-x-4  mt-4 gap-16">
          <FaFacebookSquare className="bg-blue-500 text-white font-bold rounded-md h-16 w-16  hover:bg-blue-600 active:bg-blue-700 cursor-pointer ">
            <a href="" className="">
              <i className="FaFacebookSquare"></i>
            </a>
          </FaFacebookSquare>
          <FaYoutube className="bg-red-500 text-white font-bold rounded-md h-16 w-16 ml-7  hover:bg-red-600 active:bg-red-700 cursor-pointer ">
            <a href="" className="text-red-500">
              <i className="FaYoutube"></i>
            </a>
          </FaYoutube>

          <FaInstagram className="bg-red-500 text-white font-bold rounded-md h-16 w-16 ml-7 hover:bg-red-600 active:bg-red-700 cursor-pointer ">
            <a href="#" className="text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </FaInstagram>
        </div>
        <div class="bg-gradient-to-r from-yellow-600 to-black  text-center text-sm text-white mt-10 mb-[-28px] ">
          <p>
            Copyright 2024 Jyotish Aloy Services Private Limited (All Rights
            Reserved)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
