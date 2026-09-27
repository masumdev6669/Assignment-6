// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <p className="text-[#ccff00] text-sm font-bold uppercase tracking-widest mb-4">
          404 Error
        </p>
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tight mb-4 text-white">
          Not Found
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}
