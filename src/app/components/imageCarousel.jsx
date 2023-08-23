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
    <div className= "relative w-full h-full p-20 ">
      
      <img
        src={images[currentIndex]}
        alt="Carousel Image"
        className="object-contain w-full h-full border-2 border-black p-2"
      />
      
      
      
      <div className="absolute bottom-1 left-20 right-20 flex justify-between">
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