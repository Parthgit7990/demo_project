import React from "react";
import "./trustedByTheBest.css";

const TrustedByTheBest = () => {
  const imageUrls = [
    "https://princetonconnective.com/wp-content/uploads/2024/07/extreme-networks-tagline-rgb.webp",
    "https://princetonconnective.com/wp-content/uploads/2024/07/ppd-1.webp",
    "https://princetonconnective.com/wp-content/uploads/2024/07/image-13.png",
    "https://princetonconnective.com/wp-content/uploads/2024/07/image-14.webp",
    "https://princetonconnective.com/wp-content/uploads/2024/07/nutrisystem.webp",
    "https://princetonconnective.com/wp-content/uploads/2024/07/image-12.webp",
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Trusted by the <span className="text-red-600">Best</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Companies working with us to simplify their IT process and change
            the way they do business around the globe.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-smooth">
            {[...imageUrls, ...imageUrls, ...imageUrls].map((url, index) => (
              <div key={`first-${index}`} className="flex items-center">
                <div className="flex-shrink-0 w-32 h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                  <img
                    src={url}
                    alt={`Partner ${index + 1}`}
                    className="max-w-2/3 max-h-2/3 object-contain filter transition-all duration-300"
                  />
                  <span
                    className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center px-2 hidden"
                    style={{ display: "none" }}
                  >
                    Partner {index + 1}
                  </span>
                </div>
                <div className="w-px h-20 bg-gray-300 mx-2 sm:mx-4 md:mx-6 lg:mx-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedByTheBest;
