"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { IExercise } from "@/types/exercise.type";

interface IExerciseContext {
  addToPlans: IExercise[];
  setAddToPlans: React.Dispatch<
    React.SetStateAction<IExercise[]>
  >;

  saveForLater: IExercise[];
  setSaveForLater: React.Dispatch<
    React.SetStateAction<IExercise[]>
  >;

  completedExercises: number[];
  setCompletedExercises: React.Dispatch<
    React.SetStateAction<number[]>
  >;
}

export const ExerciseContext = createContext<IExerciseContext>({
  addToPlans: [],
  setAddToPlans: () => {},

  saveForLater: [],
  setSaveForLater: () => {},

  completedExercises: [],
  setCompletedExercises: () => {},
});

const ExerciseProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [addToPlans, setAddToPlans] = useState<IExercise[]>([]);
  const [saveForLater, setSaveForLater] = useState<IExercise[]>([]);
  const [completedExercises, setCompletedExercises] =
    useState<number[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // LOAD DATA
  useEffect(() => {
    const savedPlans = localStorage.getItem("addToPlans");
    const savedLater = localStorage.getItem("saveForLater");
    const savedCompleted = localStorage.getItem(
      "completedExercises",
    );

    if (savedPlans) {
      const plans: IExercise[] = JSON.parse(savedPlans);

      // Maximum 5 workouts
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAddToPlans(plans.slice(0, 5));
    }

    if (savedLater) {
      setSaveForLater(JSON.parse(savedLater));
    }

    if (savedCompleted) {
      setCompletedExercises(JSON.parse(savedCompleted));
    }

    setIsLoaded(true);
  }, []);

  // SAVE TODAY'S PLAN
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "addToPlans",
      JSON.stringify(addToPlans),
    );
  }, [addToPlans, isLoaded]);

  // SAVE FOR LATER
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "saveForLater",
      JSON.stringify(saveForLater),
    );
  }, [saveForLater, isLoaded]);

  // COMPLETED EXERCISES
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "completedExercises",
      JSON.stringify(completedExercises),
    );
  }, [completedExercises, isLoaded]);

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