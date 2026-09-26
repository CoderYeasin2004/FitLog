
"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

export const ExerciseContext = createContext<any>({});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlans, setAddToPlans] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("addToPlans");
      return saved ? JSON.parse(saved) : [];
    }

    return [];
  });

  const [saveForLater, setSaveForLater] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("saveForLater");
      return saved ? JSON.parse(saved) : [];
    }

    return [];
  });

  const [completedExercises, setCompletedExercises] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("completedExercises");
      return saved ? JSON.parse(saved) : [];
    }

    return [];
  });

  // Save today's plan
  useEffect(() => {
    localStorage.setItem(
      "addToPlans",
      JSON.stringify(addToPlans)
    );
  }, [addToPlans]);

  // Save saved workouts
  useEffect(() => {
    localStorage.setItem(
      "saveForLater",
      JSON.stringify(saveForLater)
    );
  }, [saveForLater]);

  // Save completed workouts
  useEffect(() => {
    localStorage.setItem(
      "completedExercises",
      JSON.stringify(completedExercises)
    );
  }, [completedExercises]);

  const SharedData = {
    addToPlans,
    setAddToPlans,

    saveForLater,
    setSaveForLater,

    completedExercises,
    setCompletedExercises,
  };

  return (
    <ExerciseContext.Provider value={SharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;
