import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* LOGO & BRAND */}
        <div className="flex items-center gap-1">
          <Image src={logo} alt="FitLog Logo" className="w-5 h-5 rotate-135" />
          <span className="text-white text-[14px] font-bold uppercase tracking-wider">
            FITLOG
          </span>
        </div>

        {/* COPYRIGHT TEXT */}
        <div className="text-center md:text-right">
          <p className="font-light text-[13px] text-gray-400">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
