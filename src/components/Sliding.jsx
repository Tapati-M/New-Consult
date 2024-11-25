import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { manoj, rudrakh, prattush, pramukh, bhairava } from "../assets";

const Sliding = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small devices (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-center">
          OUR ASTROLOGERS
        </h1>
        <p className="text-center text-sm md:text-lg">
          Best, Experienced Astrologers Whom You Can Consult Online
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full sm:w-3/4 mx-auto mt-8 bg-yellow-400 rounded-xl py-4 px-32">
        <Slider {...settings}>
          {astrologers.map((items) => (
            <div
           
              className="h-[320px] sm:h-[350px] flex flex-col items-center justify-center text-black bg-yellow-400 rounded-xl"
            >
              <div className="rounded-t-xl flex items-center justify-center">
                <img
                  src={items.img}
                  alt={items.name}
                  className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="bg-red-300 mt-4 p-4 w-[90%] sm:w-[80%] mx-auto rounded-lg">
                <p className="text-base sm:text-xl font-semibold text-center">
                  {items.name}
                </p>
                <div className="flex justify-center items-center mt-4">
                  {[...Array(5)].map(() => (
                    <FaStar
                  
                      className="text-yellow-800 mx-0.5 sm:mx-1"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Promotional Text Section */}
      <div className="text-center text-black mt-8 px-4">
        <p className="text-xl md:text-3xl font-semibold">
          First
          <span className="text-red-600 text-2xl md:text-5xl font-bold">3</span>
          Chats/Calls
          <span className="text-green-900 text-4xl md:text-7xl font-bold">
            Free!!
          </span>
        </p>
      </div>
    </div>
  );
};

const astrologers = [
  { name: "Manoj Sastri", img: manoj },
  { name: "Rudrakh Sastri", img: rudrakh },
  { name: "Prattush Sastri", img: prattush },
  { name: "Pramukh Sastri", img: pramukh },
  { name: "Bhairava Acharya", img: bhairava },
];

export default Sliding;
