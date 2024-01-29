"use client";

import React, { useState, useEffect } from "react";
import { getImageSize } from "react-image-size";

export default function Card({ title, description, images, link=undefined }) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <button disabled={link === undefined} onClick={link !== undefined ? () => window.open(link, "_blank", "noreferrer") : {}} className="flex flex-row items-center bg-black/80 rounded-lg shadow-lg mx-16 my-8 group hover:scale-110 ease-in duration-200 h-fit">
      <div className="flex flex-col items-start justify-center z-10 h-full p-8 min-w-2/3 w-2/3">
        <h1 className={`text-2xl font-bold text-center border-white border-b-0 ${
          link !== undefined ? "group-hover:border-b-4 group-hover:font-black ease-out duration-200" : ""
        }`}>{title}</h1>
        <p className="flex-1 text-left">{description}</p>
      </div>
      <div  className="flex w-full h-full relative overflow-clip rounded-r-lg z-0 items-center">
        {images.map((element, idx) => (
          <img
            src={element}
            alt={title}
            className={`absolute ease-in-out duration-500 ${
              idx === imgIdx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </button>
  );
}