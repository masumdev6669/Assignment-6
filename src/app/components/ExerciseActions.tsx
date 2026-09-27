// src/components/ExerciseActions.tsx
"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function ExerciseActions({ exercise }: { exercise: any }) {
  // Bring in the functions from our global context
  const { addToPlan, addToSaved, planItems, savedItems } = useApp();

  // Local state to trigger a visual change on click
  const [justAddedToPlan, setJustAddedToPlan] = useState(false);
  const [justAddedToSaved, setJustAddedToSaved] = useState(false);

  // Check if this exercise is already in the global list
  const alreadyInPlan = planItems.some((i) => i.id === exercise.id);
  const alreadyInSaved = savedItems.some((i) => i.id === exercise.id);

  const handleAddToPlan = () => {
    addToPlan(exercise);
    setJustAddedToPlan(true);
  };

  const handleAddToSaved = () => {
    addToSaved(exercise);
    setJustAddedToSaved(true);
  };

  return (
    <div className="flex flex-wrap gap-4 mt-2">
      {/* ADD TO PLAN BUTTON */}
      <button
        onClick={handleAddToPlan}
        disabled={justAddedToPlan || alreadyInPlan}
        className={`font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 ${
          justAddedToPlan || alreadyInPlan
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-[#ccff00] hover:bg-[#b3e600] text-black"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        {justAddedToPlan || alreadyInPlan
          ? "Added to Plan"
          : "Add to today's plan"}
      </button>

      {/* SAVE FOR LATER BUTTON */}
      <button
        onClick={handleAddToSaved}
        disabled={justAddedToSaved || alreadyInSaved}
        className={`font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 border ${
          justAddedToSaved || alreadyInSaved
            ? "border-gray-800 text-gray-600 cursor-not-allowed"
            : "bg-transparent border-gray-700 hover:border-gray-500 text-white"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          ></path>
        </svg>
        {justAddedToSaved || alreadyInSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
