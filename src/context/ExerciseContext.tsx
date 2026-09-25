"use client";

import { createContext, ReactNode, useState } from "react";

export const ExerciseContext = createContext({});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlans, setAddToPlans] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);

  const SharedData = {
    addToPlans,
    setAddToPlans,
    saveForLater,
    setSaveForLater,
  };

  return (
    <ExerciseContext.Provider value={SharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;