import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// A functional component for rendering astrologer cards
const AstroCard = ({ astrologers }) => {
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);

  // Helper function to render rating stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }
    return stars;
  };

  // Chat handler
  const handleChat = (chatLink) => {
    window.open(chatLink, "_blank");
  };

  // Call handler
  const handleCall = (phone) => {
    window.open(`tel:${phone}`, "_self");
  };

  return (
    <div className="bg-yellow-400 min-h-screen p-8">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {astrologers.map((astro, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedAstrologer(astro)}
          >
            {/* Avatar */}
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full overflow-hidden">
              <img
                src={astro.avatar}
                alt={`${astro.name} Avatar`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name and Details */}
            <h3 className="text-center text-lg font-bold mt-4">{astro.name}</h3>
            <div className="flex justify-center items-center text-yellow-500 mt-2">
              {renderStars(astro.rating)}
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              {astro.expertise}
            </p>
            <p className="text-center text-sm text-gray-500">
              Exp: {astro.experience}
            </p>
            <p className="text-center text-sm font-bold text-green-600">
              {astro.rate}
            </p>
            {/* Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleChat(astro.chatLink)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm"
              >
                Chat
              </button>
              <button
                onClick={() => handleCall(astro.phone)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
              >
                Call
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Astrologer */}
      {selectedAstrologer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedAstrologer(null)}
        >
          <div
            className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
              onClick={() => setSelectedAstrologer(null)}
            >
              ×
            </button>
            <div className="text-center">
              <img
                src={selectedAstrologer.avatar}
                alt={selectedAstrologer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold">{selectedAstrologer.name}</h2>
              <div className="flex justify-center items-center text-yellow-500 mt-2">
                {renderStars(selectedAstrologer.rating)}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {selectedAstrologer.expertise}
              </p>
              <p className="text-sm text-gray-500">
                Exp: {selectedAstrologer.experience}
              </p>
              <p className="text-lg font-bold text-green-600 mt-2">
                {selectedAstrologer.rate}
              </p>
              <p className="mt-4 text-sm text-gray-700">
                {selectedAstrologer.description}
              </p>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => handleChat(selectedAstrologer.chatLink)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  Chat
                </button>
                <button
                  onClick={() => handleCall(selectedAstrologer.phone)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes for validation
AstroCard.propTypes = {
  astrologers: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      expertise: PropTypes.string.isRequired,
      languages: PropTypes.string,
      experience: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
      description: PropTypes.string,
      rating: PropTypes.number.isRequired,
      chatLink: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AstroCard;
