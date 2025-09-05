import React from "react";

function Cards() {
  return (
    <div className="flex items-center px-32 gap-5 w-full h-screen bg-zinc-900">
      <div className="cardcontainer w-1/2 h-[50vh]">
      <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#004d43]">
        <img className="w-22" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#cdea68]">&copy;2019-25</button>
      </div>
      </div>
      <div className="flex gap-5 cardcontainer w-1/2 h-[50vh]">
      <div className="card w-1/2 h-full rounded-xl]">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#212121]">
        <img className="w-22" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#f4f4f4]">RATING 5.0 ON CLUTCH</button>
      </div>
      </div>
      <div className="card w-1/2 h-full rounded-xl">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#212121]">
        <img className="w-22" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#f4f4f4]">BOOTCAMP ALUMNI</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Cards;
