"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { showToast } from "./Toaster";

export default function ExerciseActions({ exercise }: { exercise: any }) {
  const { addToPlan, addToSaved, planItems, savedItems } = useApp();

  const isAlreadyInPlan = planItems.some((i) => i.id === exercise.id);
  const isAlreadyInSaved = savedItems.some((i) => i.id === exercise.id);

  const handleAddToPlan = () => {
    if (isAlreadyInPlan) {
      showToast("Already added to today's plan", "warning");
      return;
    }
    addToPlan(exercise);
    showToast("Added to today's plan");
  };

  const handleAddToSaved = () => {
    if (isAlreadyInSaved) {
      showToast("Already saved for later", "warning");
      return;
    }
    addToSaved(exercise);
    showToast("Saved for later", "info");
  };

  return (
    <div className="flex flex-wrap gap-4 mt-2">
      <button
        onClick={handleAddToPlan}
        className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
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
        {isAlreadyInPlan ? "Added to today's plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleAddToSaved}
        className="bg-transparent border border-gray-700 hover:border-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
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
        {isAlreadyInSaved ? "Saved for later" : "Save for later"}
      </button>
    </div>
  );
}
