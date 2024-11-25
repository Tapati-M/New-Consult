import React from "react";
import { RudrakshaBracelet, RudrakshaPendent, GreenJade, GoldCoin, PearlRing } from "../assets";
const ProductsPage = () => {
  // Product Data
  const products = [
    {
      name: "Gold Coin",
      image: GoldCoin, 
    },
    {
      name: "Rudraksh Bracelet",
      image: RudrakshaBracelet, 
    },
    {
      name: "Rudraksh Pendent",
      image: RudrakshaPendent, 
    },
    {
      name: "Pearl Ring",
      image: PearlRing, 
    },
    {
      name: "Green Jade",
      image: GreenJade, 
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center ">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-4 text-center ">EXPLORE OUR PRODUCTS</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-5xl">
        {products.map((products) => (
          <div
            
            className="flex flex-col items-center text-center bg-gray-100 p-4 rounded-3xl shadow-lg"
          >
            {/* Product Image */}
            <img
              src={products.image}
              alt={products.name}
              className="w-32 h-32 rounded-3xl mb-4"
            />
            {/* Product Name */}
            <p className="font-semibold text-lg">{products.name}</p>
          </div>
        ))}
      </div>

      {/* Go to Store Button */}
      <div className="mt-12">
        <a
          href="/store" 
          className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Go to Store
        </a>
      </div>
    </div>
  );
};

export default ProductsPage;
