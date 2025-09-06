import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      datatype=".scroll.section"
      data-scroll-speed=".001"
      className="w-full py-8 sm:py-10 md:py-20 rounded-2xl sm:rounded-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        {[1, 2, 3].map((_, index) => (
          <motion.h1
            key={index}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='text-[10vw] sm:text-[12vw] md:text-[25vw] leading-none font-["Founders Grotesk X-Cond Lt"] uppercase font-bold tracking-tighter pr-6 sm:pr-10 md:pr-20'
          >
            We are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
