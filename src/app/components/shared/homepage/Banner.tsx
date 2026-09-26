import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="flex container mx-auto bg-gray-900 gap-20 rounded-2xl mt-9 justify-between p-10">
      <div className="space-y-4 ml-9 mt-9">
        <p className="text-[#c2f800] font-bold font-sans">WORKOUT LIBRARY</p>
        <h1 className="text-5xl font-bold">
          TRAIN WITH INTENT. LOG <br />
          EVERY SET.
        </h1>
        <p>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          <br />
          into today's plan, and watch the week's work add up.
        </p>
        <button className="bg-[#c2f800] text-black px-6 py-2 rounded-[10px] font-bold text-[12px] mt-4">
          BROWSE WORKOUTS
        </button>
      </div>
      <div>
        <Image src={bannerImg} />
      </div>
    </div>
  );
};

export default Banner;
