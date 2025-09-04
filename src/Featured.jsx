import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div>
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer w-1/2 h-[75vh] ">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img className="w-full h-full bg-cove" src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
          </div>
          </div>
          <div className="cardcontainer w-1/2 h-[75vh]">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
