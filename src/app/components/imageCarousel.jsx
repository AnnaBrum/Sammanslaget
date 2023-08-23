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
    <div className="relative w-full h-full p-8">
      <img
        src={images[currentIndex]}
        alt="Carousel Image"
        className="object-cover w-full h-full"
      />
      
      
      <div className="absolute bottom-2 left-2 right-2 flex justify-between">
        <button
          onClick={prevImage}
          className="inline-block text-sm mt-8 border rounded-full tracking-wide border-blue-900 text-white bg-blue-900 px-6 py-3 hover:bg-white hover:text-blue-900 transition"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="inline-block text-sm mt-8 border rounded-full tracking-wide border-blue-900 text-white bg-blue-900 px-6 py-3 hover:bg-white hover:text-blue-900 transition"
        >
          Next
        </button>
      </div>
      </div>
    
  );
};

export default ImageCarousel;