"use client";
import React from "react";

export default function Infocard() {
  return (
    <div className="pt-40 m-10">
      <div className="flex rounded-full relative overflow-hidden w-16 md:w-26 lg:w-36 h-16 md:h-26 lg:h-36 ">
        <img
          src="/Startsida-darkmode.jpeg"
          alt="portrait"
          className="object-fill"
        />
      </div>
      <div className="pt-10">
        <h2>NAMN</h2>
        <p>Utbildning</p>
        <span>email</span>
      </div>
    </div>
  );
}
