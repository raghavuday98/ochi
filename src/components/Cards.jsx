import React from "react";

function Cards() {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 md:px-32 gap-5 w-full py-10 md:py-0 md:h-screen bg-zinc-900">
      {/* Card 1 */}
      <div className="cardcontainer w-full md:w-1/2 h-[40vh] sm:h-[50vh]">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#004d43]">
          <img
            className="w-24 sm:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Ochi Logo"
          />
          <button className="absolute px-3 sm:px-5 py-1 border-2 rounded-full left-4 sm:left-6 md:left-10 bottom-4 sm:bottom-6 md:bottom-10 text-[#cdea68] text-xs sm:text-sm">
            &copy;2019-2025
          </button>
        </div>
      </div>

      {/* Cards 2 & 3 */}
      <div className="flex flex-col md:flex-row gap-5 w-full md:w-1/2 h-[40vh] sm:h-[50vh]">
        <div className="cardcontainer w-full md:w-1/2 h-full">
          <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#212121]">
            <img
              className="w-24 sm:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="Clutch Logo"
            />
            <button className="absolute px-2 sm:px-3 py-1 border-2 rounded-full left-4 sm:left-6 md:left-10 bottom-4 sm:bottom-6 md:bottom-10 text-[#f4f4f4] text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
              RATING 5.0 ON CLUTCH
            </button>
          </div>
        </div>

        <div className="cardcontainer w-full md:w-1/2 h-full mt-5 md:mt-0">
          <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#212121]">
            <img
              className="w-24 sm:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="Business Bootcamp Alumni Logo"
            />
            <button className="absolute px-2 sm:px-3 py-1 border-2 rounded-full left-4 sm:left-6 md:left-10 bottom-4 sm:bottom-6 md:bottom-10 text-[#f4f4f4] text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
              BUSINESS BOOTCAMP ALUMNI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
