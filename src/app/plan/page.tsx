// src/app/plan/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { showToast } from "@/app/components/Toaster";

export default function MyPlanPage() {
  const { planItems, savedItems, removeFromPlan, removeFromSaved } = useApp();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const [doneItems, setDoneItems] = useState<number[]>([]);

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

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleDone = (id: number) => {
    setDoneItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      removeFromPlan(id);
      showToast("Removed from today's plan", "info");
    } else {
      removeFromSaved(id);
      showToast("Removed from saved", "info");
    }
  };

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

        <div className="space-y-4">
          {sortedList.length === 0 ? (
            <div className="bg-[#0f0f0f] border border-dashed border-gray-800 rounded-2xl min-h-[400px] flex flex-col items-center justify-center p-8">
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
            </div>
          ) : (
            sortedList.map((item) => {
              const isDone = doneItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`bg-[#151515] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 transition-all ${isDone ? "opacity-60" : ""}`}
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#111] shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <h3
                      className={`font-black text-xl uppercase tracking-tight ${isDone ? "line-through text-gray-500" : "text-white"}`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.equipment}</p>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400 text-xs mt-1 font-medium">
                      <span className="flex items-center gap-1">
                        ⏱ {item.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        🔥 {item.caloriesBurned} kcal
                      </span>
                      <span className="flex items-center gap-1">
                        ⭐ {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={`/components/exercise/${item.id}`}
                      className="bg-transparent border border-gray-700 hover:border-gray-500 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                      View Details
                    </Link>

                    {activeTab === "today" && (
                      <button
                        onClick={() => toggleDone(item.id)}
                        className={`text-sm font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2 ${
                          isDone
                            ? "bg-gray-700 text-gray-400"
                            : "bg-[#ccff00] hover:bg-[#b3e600] text-black"
                        }`}
                      >
                        {isDone ? (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        ) : null}
                        {isDone ? "Done" : "Mark as Done"}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-500 hover:text-red-500 font-bold p-2 text-xl"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
