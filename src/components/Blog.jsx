import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
import { pic1, pic2, pic3 } from "../assets"

const blogs = [
  {
    title: "MEET THE FOUNDER ",
    image: pic1, 
    link: "/blog",
    date: "Date",
  },
  {
    title: "KNOW OUR JOURNEY",
    image: pic2, 
    link: "/blog",
    date: "Date",
  },
  {
    title: "ADVICE AND ACHIEVEMENTS",
    image: pic3, 
    link: "/blog",
    date: "Date",
  },
];

const Blog = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:mt-[-200px] md:mt-[-550px]">
        {/* Blogs Section */}
        <div className="text-center ">
        <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-center">BLOGS & MORE</h1>
        <p className="text-lg text-gray-600">Get in touch with us</p>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="mt-10 px-14">
        <Slider {...sliderSettings}>
          {blogs.map((blog, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p className="text-gray-600 mt-2">{blog.date}</p>
                  <a href="/blog"
                    className="text-blue-500 mt-4 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

      {/* Statistics Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 bg-yellow-300 text-center p-6 rounded-lg">
        <div>
          <h2 className="text-2xl font-bold">Total Users</h2>
          <p className="text-lg">No. of Users</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Time Span</h2>
          <p className="text-lg">Time span of this website</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Success Ratio</h2>
          <p className="text-lg">95%</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
