import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-8 md:px-20 py-8 font-['Neue_Montreal'] flex justify-between items-center">
      <div className="logo text-white">
        {/* Simplified logo for better rendering */}
        <h1 className="text-2xl font-semibold">ochi</h1>
      </div>
      <div className="links md:flex gap-10 hidden">
        {["Services", "Our Work", "About Us", "Insight"].map((item, index) => (
          <a key={index} className="text-md capitalize font-light">
            {item}
          </a>
        ))}
      </div>
       <div className="links md:flex gap-10 hidden">
         <a className="text-md capitalize font-light ml-32">Contact Us</a>
      </div>
      <div className="md:hidden">
        {/* Hamburger Menu Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
