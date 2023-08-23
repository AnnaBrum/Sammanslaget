'use client';
import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt="Carousel Image"
        className="w-full h-auto"
      />
      <div className="absolute bottom-2 left-2 right-2 flex justify-between">
        <button
          onClick={prevImage}
          className="px-2 py-1 bg-gray-800 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="px-2 py-1 bg-gray-800 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;