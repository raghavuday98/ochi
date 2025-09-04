import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Openning", "Presentations"].map((item, index) => {
          return (
            <div className='masker font-["Founders Grotesk X-Cond Lt"]'>
              <div className="w-fit flex items-center">
                {index === 1 && (<div className=" mr-5 w-[10vw] h-[5.7vw] rounded-md relative top-1.25  bg-red-500"></div>)}
                <h1 className="flex items-center uppercase text-[110px] font-semibold leading-[104px] h-full tracking-tighter">{item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32  flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "Fromm the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center  border-[2px] border-zinc-500 rounded-full">
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
