// src/context/AppContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type AppContextType = {
  planItems: any[];
  savedItems: any[];
  addToPlan: (item: any) => void;
  addToSaved: (item: any) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [planItems, setPlanItems] = useState<any[]>([]);
  const [savedItems, setSavedItems] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog_plan");
    const savedList = localStorage.getItem("fitlog_saved");

    if (savedPlan) setPlanItems(JSON.parse(savedPlan));
    if (savedList) setSavedItems(JSON.parse(savedList));

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog_plan", JSON.stringify(planItems));
      localStorage.setItem("fitlog_saved", JSON.stringify(savedItems));
    }
  }, [planItems, savedItems, isLoaded]);

  const addToPlan = (item: any) => {
    if (!planItems.find((i) => i.id === item.id)) {
      setPlanItems([...planItems, item]);
    }
  };

  const addToSaved = (item: any) => {
    if (!savedItems.find((i) => i.id === item.id)) {
      setSavedItems([...savedItems, item]);
    }
  };

  const removeFromPlan = (id: number) => {
    setPlanItems(planItems.filter((i) => i.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSavedItems(savedItems.filter((i) => i.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        planItems,
        savedItems,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
