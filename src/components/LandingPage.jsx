import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full pb-20 bg-zinc-900 pt-1">
      <div className="textstructure mt-12 px-4 md:mt-[13vw] md:px-[5vw]">
        {["We Create", "Eye-Openning", "Presentations"].map((item, index) => (
          <div key={index} className='masker font-["Founders Grotesk X-Cond Lt"]'>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div initial={{width: 0}} animate={{width: "10vw"}} transition={{ease: [0.75, 0, 0.24, 1], duration: 1}} className="mr-5 w-[10vw] h-[5.7vw] rounded-md relative top-1.25 bg-[url('assets/image.png')] bg-cover"></motion.div>
              )}
              <h1 className="flex items-center uppercase text-4xl md:text-[7vw] font-semibold leading-[3.5rem] md:leading-[7vw] h-full tracking-tighter">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-zinc-800 mt-8 py-3 px-4 md:border-t-[0.1vw] md:mt-[8vw] md:py-[1.3vw] md:px-[5vw] flex justify-between items-center">
        {["For public and private companies", "Fromm the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border border-zinc-400 font-light text-md uppercase rounded-full md:px-[1.3vw] md:py-[0.5vw] md:border-[0.1vw]">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-2 border-zinc-500 rounded-full md:w-[2.6vw] md:h-[2.6vw] md:border-[0.2vw]">
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
