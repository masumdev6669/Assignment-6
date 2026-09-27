// src/app/page.tsx
import React from "react";
import Banner from "./components/shared/homepage/Banner";
import Fit from "./components/shared/homepage/Fit";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Banner />
      <Fit />
    </main>
  );
}
