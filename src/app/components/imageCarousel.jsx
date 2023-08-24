"use client";
import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full px-40 py-20  bg-blue-900">
      <img
        src={images[currentIndex]}
        alt="Carousel Image"
        className="object-contain w-full p-2"
      />

      <div className="bottom-1 flex justify-between">
        <button
          onClick={prevImage}
          className="inline-block text-sm mt-8 border rounded-full tracking-wide border-white text-white bg-blue-900 px-6 py-3 hover:bg-white hover:text-blue-900 transition"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="inline-block text-sm mt-8 border rounded-full tracking-wide border-white text-white bg-blue-900 px-6 py-3 hover:bg-white hover:text-blue-900 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
