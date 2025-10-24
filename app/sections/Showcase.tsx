"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const ButtonPrev = ({ ...props }) => (
  <button
    className="absolute left-0 top-0 h-svh px-12 transition-all hover:bg-linear-to-r hover:from-black/50 cursor-pointer"
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 30L8 16L20 2"
      />
    </svg>
  </button>
);

const ButtonNext = ({ ...props }) => (
  <button
    className="absolute right-0 top-0 h-svh px-12 transition-all hover:bg-linear-to-l hover:from-black/50 cursor-pointer"
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12 30l12-14L12 2"
      />
    </svg>
  </button>
);

export const Showcase = () => {
  const [index, setIndex] = useState(0);
  const showcaseURLs = [
    "/images/showcase/1/showcase-1-1.jpg",
    "/images/showcase/1/showcase-1-2.jpg",
    "/images/showcase/1/showcase-1-3.jpg",
    "/images/showcase/1/showcase-1-4.jpg",
    "/images/showcase/1/showcase-1-5.jpg",
    "/images/showcase/1/showcase-1-6.jpg",
    "/images/showcase/1/showcase-1-7.jpg",
    "/images/showcase/1/showcase-1-8.jpg",
    "/images/showcase/1/showcase-1-9.jpg",
  ];

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? showcaseURLs.length - 1 : prev - 1));
  const goNext = () =>
    setIndex((prev) => (prev === showcaseURLs.length - 1 ? 0 : prev + 1));

  return (
    <div
      className={cn("relative h-svh bg-cover")}
      style={{ backgroundImage: `url(${showcaseURLs[index]})` }}
    >
      <div
        className={cn(
          "flex justify-center items-end h-full",
          "bg-linear-to-t from-gray-950 to-50%"
        )}
      >
        <div className="text-white font-outfit font-extralight text-center uppercase py-20 tracking-wider">
          <p className=" text-6xl">Pahrump Valley</p>
          <p>4BR | 4BA | $17,650,000</p>
        </div>
      </div>

      <ButtonPrev onClick={goPrev} />
      <ButtonNext onClick={goNext} />
    </div>
  );
};
