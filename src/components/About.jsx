import React from "react";

function About() {
  return (
  <div data-scroll datatype='.scroll.section' className="w-full p-8 md:p-20 bg-[#CDEA68] rounded-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-3xl md:text-5xl lg:text-[4vw] leading-tight lg:leading-[4.5vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-10 mt-10 md:mt-20 border-[#a1b562]">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-7xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-6 py-4 md:px-10 md:py-6 mt-10 bg-zinc-900 rounded-full text-white text-sm md:text-base">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-[70vh] rounded-3xl mt-6 md:mt-0">
          <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
                alt=""
              />
        </div>
      </div>
    </div>
  );
}

export default About;
