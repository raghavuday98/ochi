import React from "react";

function About() {
  return (
    <div
      data-scroll
      datatype=".scroll.section"
      className="w-full p-6 sm:p-8 md:p-20 bg-[#CDEA68] rounded-2xl sm:rounded-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-2xl sm:text-3xl md:text-5xl lg:text-[4vw] leading-snug sm:leading-tight lg:leading-[4.5vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-10 border-t pt-8 sm:pt-10 md:pt-10 mt-8 sm:mt-10 md:mt-20 border-[#a1b562]">
        {/* Left */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold">
            Our approach:
          </h1>
          <button className="flex uppercase gap-6 sm:gap-10 items-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-6 mt-6 sm:mt-10 bg-zinc-900 rounded-full text-white text-xs sm:text-sm md:text-base">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 h-[30vh] sm:h-[40vh] md:h-[70vh] rounded-2xl mt-6 md:mt-0">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="About section"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
