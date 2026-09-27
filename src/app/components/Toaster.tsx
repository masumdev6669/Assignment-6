// src/app/components/Toaster.tsx
"use client";

import React, { useEffect, useState } from "react";

type Toast = {
  id: number;
  message: string;
  type: "success" | "info" | "warning";
};

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleToast = (event: Event) => {
      const customEvent = event as CustomEvent;
      const newToast = {
        id: Date.now(),
        message: customEvent.detail.message,
        type: customEvent.detail.type || "success",
      };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 3000);
    };

    window.addEventListener("show-toast", handleToast);
    return () => window.removeEventListener("show-toast", handleToast);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg font-bold text-sm transform transition-all duration-300 ${
            toast.type === "success"
              ? "bg-[#ccff00] text-black"
              : toast.type === "warning"
                ? "bg-[#202020] text-white border-2 border-red-500"
                : "bg-[#202020] text-white border-2 border-[#ccff00]"
          }`}
        >
          {toast.type === "warning" ? (
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className={`w-5 h-5 ${toast.type === "success" ? "text-black" : "text-[#ccff00]"}`}
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
          )}

          {toast.message}
        </div>
      ))}
    </div>
  );
}

export const showToast = (
  message: string,
  type: "success" | "info" | "warning" = "success",
) => {
  window.dispatchEvent(
    new CustomEvent("show-toast", { detail: { message, type } }),
  );
};
