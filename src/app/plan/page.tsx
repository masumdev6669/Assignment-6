// src/app/plan/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function MyPlanPage() {
  const { planItems, savedItems, removeFromPlan, removeFromSaved } = useApp();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const totalExercises = planItems.length;
  const totalMinutes = planItems.reduce(
    (sum, item) => sum + (item.duration || 0),
    0,
  );
  const totalCalories = planItems.reduce(
    (sum, item) => sum + (item.caloriesBurned || 0),
    0,
  );

  const currentList = activeTab === "today" ? planItems : savedItems;

  // Sort the list based on the selected sort option
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
            My Plan
          </h1>
          <p className="text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

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

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex bg-[#151515] border border-gray-800 rounded-lg p-1 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("today")}
              className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-bold transition-colors ${activeTab === "today" ? "bg-[#202020] text-white" : "text-gray-500 hover:text-white"}`}
            >
              Today's Plan ({planItems.length})
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-bold transition-colors ${activeTab === "saved" ? "bg-[#202020] text-white" : "text-gray-500 hover:text-white"}`}
            >
              Saved ({savedItems.length})
            </button>
          </div>

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

        <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl min-h-[400px] flex flex-col items-center justify-center p-8">
          {sortedList.length === 0 ? (
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
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedList.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#151515] p-4 rounded-xl border border-gray-800 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#111]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.duration} min | {item.caloriesBurned} kcal | ⭐{" "}
                        {item.rating}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      activeTab === "today"
                        ? removeFromPlan(item.id)
                        : removeFromSaved(item.id)
                    }
                    className="text-red-500 hover:text-red-400 text-sm font-bold p-2"
                  >
                    ✕
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
