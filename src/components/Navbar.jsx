// Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full h-[10vh] px-6 sm:px-8 md:px-20 py-6 sm:py-8 font-['Neue_Montreal'] flex justify-between items-center backdrop-blur-3xl">
      {/* Logo */}
      <div className="logo text-white">
        <h1 className="text-xl sm:text-2xl font-semibold">ochi</h1>
      </div>

      {/* Links (hidden on mobile, flex on md and up) */}
      <div className="links hidden md:flex gap-6 lg:gap-10">
        {["Services", "Our Work", "About Us", "Insight"].map((item, index) => (
          <a
            key={index}
            className="text-sm lg:text-md capitalize font-light cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Contact (also hidden on mobile) */}
      <div className="links hidden md:flex gap-6 lg:gap-10">
        <a className="text-sm lg:text-md capitalize font-light lg:ml-32 cursor-pointer">
          Contact Us
        </a>
      </div>

      {/* Hamburger Menu (visible only on mobile) */}
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
