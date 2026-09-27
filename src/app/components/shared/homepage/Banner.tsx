// src/components/shared/homepage/Banner.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link"; // <-- Make sure this line is here!
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto bg-gray-900 rounded-2xl mt-9 p-6 md:p-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        <div className="space-y-4 flex-1 text-center lg:text-left">
          <p className="text-[#c2f800] font-bold font-sans tracking-wider text-sm">
            WORKOUT LIBRARY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            TRAIN WITH INTENT. LOG <br className="hidden md:block" />
            EVERY SET.
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <div className="pt-4">
            <Link
              href="#library"
              className="inline-block bg-[#c2f800] hover:bg-[#b3e600] text-black px-6 py-3 rounded-[10px] font-bold text-[12px] transition-colors"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={bannerImg}
            alt="FitLog hero image of a muscular figure working out"
            className="w-full max-w-md h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
