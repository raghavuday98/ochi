import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full pb-10 sm:pb-16 md:pb-20 bg-zinc-900 pt-1"
    >
      {/* Text Section */}
      <div className="textstructure mt-8 sm:mt-10 md:mt-[13vw] px-4 md:px-[5vw]">
        {["We Create", "Eye-Openning", "Presentations"].map((item, index) => (
          <div
            key={index}
            className='masker font-["Founders Grotesk X-Cond Lt"]'
          >
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "10vw" }}
                  transition={{
                    ease: [0.75, 0, 0.24, 1],
                    duration: 1,
                  }}
                  className="mr-3 sm:mr-5 w-[8vw] sm:w-[10vw] h-[5vw] sm:h-[5.7vw] rounded-md relative top-1 bg-[url('assets/image.png')] bg-cover"
                ></motion.div>
              )}
              <h1 className="flex items-center uppercase text-3xl sm:text-4xl md:text-[7vw] font-semibold leading-[2.5rem] sm:leading-[3.5rem] md:leading-[7vw] h-full tracking-tighter">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="border-t border-zinc-800 mt-6 sm:mt-8 md:mt-[8vw] py-3 sm:py-4 md:py-[1.3vw] px-4 md:px-[5vw] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        {["For public and private companies", "From the first pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-sm sm:text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          )
        )}

        {/* Button + Icon */}
        <div className="start flex items-center gap-4 sm:gap-5">
          <div className="px-4 py-2 border border-zinc-400 font-light text-sm sm:text-md uppercase rounded-full md:px-[1.3vw] md:py-[0.5vw] md:border-[0.1vw]">
            Start the project
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-zinc-500 rounded-full md:w-[2.6vw] md:h-[2.6vw] md:border-[0.2vw]">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;