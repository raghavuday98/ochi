import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 md:py-20">
      <div className="w-full px-4 md:px-20 border-b border-zinc-700 pb-10 md:pb-20">
        <h1 className='text-3xl sm:text-5xl md:text-7xl font-["Neue Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>

      <div className="px-4 md:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-10">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[55vh] md:h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#cdea68] left-1/2 md:left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-3xl sm:text-5xl md:text-8xl">
              {"SALIENCE LABS".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[55vh] md:h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#cdea68] right-1/2 md:right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-3xl sm:text-5xl md:text-8xl">
              {"MEDALLIA EXPERIENCE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
