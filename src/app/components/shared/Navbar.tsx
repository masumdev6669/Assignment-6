"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useApp } from "@/context/AppContext";

const Navbar = () => {
  const { planItems, savedItems } = useApp();

  return (
    <div className="navbar bg-[#111111] border-b border-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#111111] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/"
                className="text-[#c2f800] font-bold bg-[#1a1a1a] rounded-full"
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/plan">My Plan</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2 ml-10">
          <Image src={logo} alt="FitLog Logo" className="w-8 h-8" />
          <span className="text-xl font-black uppercase tracking-wider">
            FITLOG
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link
              href="/"
              className="text-[#c2f800] bg-[#1a1a1a] rounded-full font-bold px-6"
            >
              Workouts
            </Link>
          </li>
          <li>
            <Link
              href="/plan"
              className="text-gray-400 hover:text-white font-medium px-4"
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end mr-10 gap-4">
        <Link href="/plan" className="flex items-center gap-2 cursor-pointer">
          <span className="text-gray-400 text-sm font-medium">Plan</span>
          <div className="w-6 h-6 rounded-full bg-[#c2f800] text-black flex items-center justify-center text-xs font-bold">
            {planItems.length}
          </div>
        </Link>
        <Link href="/plan" className="flex items-center gap-2 cursor-pointer">
          <span className="text-gray-400 text-sm font-medium">Saved</span>
          <div className="w-6 h-6 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center text-xs font-bold">
            {savedItems.length}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
