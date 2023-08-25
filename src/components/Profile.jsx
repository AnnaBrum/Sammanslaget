"use client";
import React from "react";

export default function Profile({profileimg, name, education, email}) {
  return (
    <div className="m-6 mt-20">
      <div className="flex rounded-full relative mx-auto overflow-hidden w-16 md:w-26 lg:w-36 h-16 md:h-26 lg:h-36 ">
        <img
          src={profileimg}
          alt="portrait"
          className="object-fill"
        />
      </div>
      <div className="pt-10">
        <h2 className="text-lg">{name}</h2>
        <p className="text-sm">{education}</p>
        <span className="text-sm">@{email}</span>
      </div>
    </div>
  );
}
