// src/app/plan/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MyPlanPage() {
  // State for the plan data (Empty initially to show 0s)
  const [planItems, setPlanItems] = useState<any[]>([]);
  const [savedItems, setSavedItems] = useState<any[]>([]);

  // State for toggling between tabs and sort dropdown
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // Calculate totals dynamically based on planItems
  const totalExercises = planItems.length;
  const totalMinutes = planItems.reduce(
    (sum, item) => sum + (item.duration || 0),
    0,
  );
  const totalCalories = planItems.reduce(
    (sum, item) => sum + (item.caloriesBurned || 0),
    0,
  );

  // Determine which list to show based on the active tab
  const currentList = activeTab === "today" ? planItems : savedItems;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
            My Plan
          </h1>
          <p className="text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* STATS SUMMARY BOX */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#151515] border border-gray-800 rounded-2xl p-6 mb-8 text-center md:text-left">
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-6">
            <span className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
              Exercises
            </span>
            <span className="text-4xl font-black text-[#ccff00]">
              {totalExercises}
            </span>
          </div>
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-800 py-4 md:py-0 md:px-6">
            <span className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
              Minutes
            </span>
            <span className="text-4xl font-black text-white">
              {totalMinutes}
            </span>
          </div>
          <div className="flex flex-col pt-4 md:pt-0 md:pl-6">
            <span className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">
              Calories
            </span>
            <span className="text-4xl font-black text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* CONTROLS ROW (Tabs and Sort) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Tabs */}
          <div className="flex bg-[#151515] border border-gray-800 rounded-lg p-1 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("today")}
              className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-bold transition-colors ${
                activeTab === "today"
                  ? "bg-[#202020] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-bold transition-colors ${
                activeTab === "saved"
                  ? "bg-[#202020] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-gray-500 text-sm font-medium">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#151515] border border-gray-800 text-white text-sm font-bold rounded-lg px-4 py-2 outline-none focus:border-[#ccff00] transition-colors"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl min-h-[400px] flex flex-col items-center justify-center p-8">
          {currentList.length === 0 ? (
            /* EMPTY STATE */
            <div className="text-center flex flex-col items-center max-w-md">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-2 text-white">
                Nothing here yet
              </h2>
              <p className="text-gray-400 mb-8">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            /* LIST OF ITEMS (Will show when plan has items) */
            <div className="w-full grid grid-cols-1 gap-4">
              {currentList.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#151515] p-4 rounded-xl border border-gray-800 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {item.duration} min | {item.caloriesBurned} kcal
                    </p>
                  </div>
                  <button className="text-red-500 hover:text-red-400 text-sm font-bold">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
