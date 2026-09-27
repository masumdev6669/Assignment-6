// // src/components/ExerciseCard.tsx
// import Image from "next/image";

// // Define the shape of our data based on your JSON
// type ExerciseProps = {
//   exercise: {
//     id: number;
//     name: string;
//     image: string;
//     muscleGroups: string[];
//     difficulty: string;
//     duration: number;
//     caloriesBurned: number;
//     rating: number;
//   };
// };

// export default function ExerciseCard({ exercise }: ExerciseProps) {
//   return (
//     <div className="bg-[#181818] rounded-2xl overflow-hidden border border-gray-800 flex flex-col hover:border-gray-600 transition-colors">
//       {/* Image Section */}
//       <div className="relative w-full h-52 bg-[#111] overflow-hidden group">
//         <Image
//           src={exercise.image}
//           alt={exercise.name}
//           fill
//           // 1. object-cover makes the image fill the full width of the card.
//           // 2. object-top keeps the focus on the upper part (the character's face/upper body).
//           // 3. scale-105 adds a tiny bit of zoom so it fills the edges nicely.
//           // 4. group-hover:scale-110 makes it zoom in further on hover.
//           className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//       </div>
//       {/* Content Section */}
//       <div className="p-5 flex flex-col flex-grow">
//         {/* Muscle Group Tags */}
//         <div className="flex gap-2 mb-3">
//           {exercise.muscleGroups.map((group) => (
//             <span
//               key={group}
//               className="bg-[#ccff00] text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider"
//             >
//               {group}
//             </span>
//           ))}
//         </div>

//         {/* Title */}
//         <h3 className="text-white text-lg font-bold uppercase leading-tight mb-4">
//           {exercise.name}
//         </h3>

//         {/* Stats Row (Aligned to bottom) */}
//         <div className="flex items-center gap-4 text-gray-400 text-xs mt-auto pt-4 border-t border-gray-800 font-medium">
//           <div className="flex items-center gap-1.5">
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//               ></path>
//             </svg>
//             {exercise.duration} min
//           </div>
//           <div className="flex items-center gap-1.5">
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
//               ></path>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
//               ></path>
//             </svg>
//             {exercise.caloriesBurned} kcal
//           </div>
//           <div className="flex items-center gap-1.5">
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//               ></path>
//             </svg>
//             {exercise.rating}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ------------------

// src/components/ExerciseCard.tsx
import Image from "next/image";
import Link from "next/link"; // <-- Make sure this is here!

// Define the shape of our data based on your JSON
type ExerciseProps = {
  exercise: {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
  };
};

export default function ExerciseCard({ exercise }: ExerciseProps) {
  return (
    <Link
      href={`../components/exercise/${exercise.id}`}
      className="block group"
    >
      <div className="bg-[#181818] rounded-2xl overflow-hidden border border-gray-800 flex flex-col hover:border-gray-600 transition-colors h-full">
        <div className="relative w-full h-52 bg-[#111] overflow-hidden">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex gap-2 mb-3">
            {exercise.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-[#ccff00] text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="text-white text-lg font-bold uppercase leading-tight mb-4">
            {exercise.name}
          </h3>

          <div className="flex items-center gap-4 text-gray-400 text-xs mt-auto pt-4 border-t border-gray-800 font-medium">
            <div className="flex items-center gap-1.5">
              ⏱ {exercise.duration} min
            </div>
            <div className="flex items-center gap-1.5">
              🔥 {exercise.caloriesBurned} kcal
            </div>
            <div className="flex items-center gap-1.5">
              ⭐ {exercise.rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
