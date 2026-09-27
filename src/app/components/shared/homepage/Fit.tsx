import React from "react";
import ExerciseCard from "@/app/components/ExerciseCard";
import fitData from "../../../../../public/fitData.json";

export default function Fit() {
  const exercises = fitData as any[];

  return (
    <section id="library" className="container mx-auto my-16 px-4 scroll-mt-24">
      {/* Library Header */}
      <div className="mb-8">
        <h2 className="text-white text-3xl font-black uppercase tracking-tight">
          The Library
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
}
