"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/exercise.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlanBtn = ({ exercise }: { exercise: IExercise }) => {
  const { addToPlans, setAddToPlans } =
    useContext(ExerciseContext);

  const isAdded = addToPlans.some(
    (item: IExercise) => item.id === exercise.id,
  );

  const isLimitReached = addToPlans.length >= 5;

  const handleAddToPlan = () => {
    // Already added
    if (isAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    // Already 5
    if (isLimitReached) {
      toast.warning(
        "Today's plan limit reached! Maximum 5 workouts.",
      );
      return;
    }

    // Add workout
    setAddToPlans((prev: IExercise[]) => [
      ...prev,
      exercise,
    ]);

    // Toast AFTER deciding what we're doing
    if (addToPlans.length === 4) {
      toast.success(
        "5th workout added! Today's plan limit reached.",
      );
    } else {
      toast.success("Exercise added to today's plan");
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      disabled={isAdded || isLimitReached}
      className={`btn btn-sm h-9 min-h-0 border-0 px-4 text-[14px] font-medium ${
        isAdded || isLimitReached
          ? "cursor-not-allowed bg-gray-600 text-gray-400"
          : "bg-lime-400 text-black hover:bg-lime-300"
      }`}
    >
      {isAdded
        ? "✓ Added to today's plan"
        : isLimitReached
          ? "Limit Reached"
          : "▣ Add to today's plan"}
    </button>
  );
};

export default AddToPlanBtn;