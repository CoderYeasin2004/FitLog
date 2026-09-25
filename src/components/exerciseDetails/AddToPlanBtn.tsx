"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/exercise.type";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToPlanBtn = ({ exercise }: { exercise: IExercise }) => {
  const { addToPlans, setAddToPlans } = useContext(ExerciseContext);

  const isAdded = addToPlans.some(
    (item: IExercise) => item?.id === exercise.id,
  );

  const handleAddToPlan = () => {
    if (isAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    setAddToPlans((prev: IExercise[]) => [...prev, exercise]);

    toast.success("Exercise added to today's plan");
  };

  return (
    <>
      <button
        className="btn btn-sm h-9 min-h-0 border-0 bg-lime-400 px-4 text-[14px] font-medium text-black hover:bg-lime-300"
        onClick={handleAddToPlan}
      >
        {isAdded ? "✓ Added to today's plan" : "▣ Add to today's plan"}
      </button>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
};

export default AddToPlanBtn;