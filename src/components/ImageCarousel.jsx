"use client";
import React, { useState } from "react";

const ImageCarousel = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative px-40">
      <div className="p-8 border max-h-140 flex object-center bg-blue-900">
        <img
          src={images[currentIndex]}
          alt="Carousel Image"
          className="object-contain p-2 mx-auto"
        />
      </div>
      <div className="bg-white p-8 ">
        <p>{descriptions[currentIndex]}</p>
      </div>
      <div className="bottom-1 flex justify-between">
        <button
          onClick={prevImage}
          className="inline-block text-sm border rounded-full tracking-wide border-white text-white bg-blue-900 px-6 py-3 hover:bg-white hover:text-blue-900  hover:border-blue-900 transition"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="inline-block text-sm border rounded-full tracking-wide border-white text-white bg-blue-900 px-6 py-3 hover:bg-white hover:text-blue-900 hover:border-blue-900 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
