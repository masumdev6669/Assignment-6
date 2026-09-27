import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import fitData from "../../../../../public/fitData.json";
import ExerciseActions from "../../../components/ExerciseActions";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ExerciseDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const exercise = fitData.find((ex) => ex.id === parseInt(id));

  if (!exercise) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN: Image */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-[#111]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT COLUMN: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {exercise.name}
          </h1>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            {exercise.description}
          </p>

          <div className="flex gap-3 mb-8">
            {exercise.muscleGroups?.map((group: string) => (
              <span
                key={group}
                className="bg-[#ccff00] text-black text-xs font-black px-3 py-1.5 rounded uppercase tracking-wider"
              >
                {group}
              </span>
            ))}
          </div>

          {/* STATS BOX - Single column layout */}
          <div className="bg-[#151515] border border-gray-800 rounded-2xl p-6 mb-8">
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-500 uppercase font-bold tracking-wider">
                  Equipment
                </span>
                <span className="text-white font-medium text-right">
                  {exercise.equipment}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-500 uppercase font-bold tracking-wider">
                  Difficulty
                </span>
                <span className="text-white font-medium text-right">
                  {exercise.difficulty}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-500 uppercase font-bold tracking-wider">
                  Sets
                </span>
                <span className="text-white font-medium text-right">
                  {exercise.sets}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-500 uppercase font-bold tracking-wider">
                  Reps
                </span>
                <span className="text-white font-medium text-right">
                  {exercise.reps}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-500 uppercase font-bold tracking-wider">
                  Duration
                </span>
                <span className="text-white font-medium text-right">
                  {exercise.duration} min
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-500 uppercase font-bold tracking-wider">
                  Calories
                </span>
                <span className="text-white font-medium text-right">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 uppercase font-bold tracking-wider">
                  Rating
                </span>
                <span className="text-white font-medium text-right">
                  {exercise.rating}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-400">
              {exercise.instructions?.map(
                (instruction: string, index: number) => (
                  <li key={index} className="leading-relaxed">
                    <span className="text-gray-300 ml-1">{instruction}</span>
                  </li>
                ),
              )}
            </ol>
          </div>

          <ExerciseActions exercise={exercise} />
        </div>
      </div>
    </main>
  );
}
