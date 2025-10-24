"use client";

import { useState, useEffect } from "react";

export const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed flex justify-center items-center top-0 left-0 w-full h-16 bg-black/50 font-outfit backdrop-blur-xs text-white tracking-wider z-10 transition-all duration-500 ${
        isScrolled ? "translate-y-0" : "-translate-y-16"
      }`}
    >
      <ul className="flex gap-5 absolute left-10 uppercase">
        <li>Home</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <img src="/images/logo.png" alt="Marci Metzger Homes logo" width={200} />
    </div>
  );
};
