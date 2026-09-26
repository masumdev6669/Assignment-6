import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-between mx-15 mt-20">
      <div className="flex items-center">
        <Image src={logo} className="w-5 h-5 rotate-135" />
        <a className="btn btn-ghost text-[14px]">FITLOG</a>
      </div>
      <div>
        <p className="font-light text-[13px] text-gray-300">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </div>
  );
};

export default Footer;
