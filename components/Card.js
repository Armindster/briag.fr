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
    <button
      disabled={link === undefined}
      onClick={link !== undefined ? () => window.open(link, "_blank", "noreferrer") : {}}
      className="grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 bg-black/80 rounded-lg shadow-lg mx-16 my-4 z-0 group hover:z-10 hover:scale-110 ease-in duration-200">
      <div className="col-span-1 lg:col-span-2 flex flex-col items-start justify-center h-full p-8 w-full">
        <h1 className={`text-2xl font-bold text-center border-white border-b-0 ${
          link !== undefined ? "group-hover:border-b-4 group-hover:font-black ease-out duration-200" : ""
        }`}>{title}</h1>
        <p className="flex-1 text-left">{description}</p>
      </div>
      <div className="col-start-1 row-start-1 lg:col-start-3 w-full h-full relative overflow-clip rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg items-center">
        {images.map((element, idx) => (
          <img
            src={element}
            alt={title}
            className={`absolute object-cover h-full w-full ease-in-out duration-500 ${
              idx === imgIdx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </button>
  );
}