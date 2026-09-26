"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/exercise.type";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SaveForLaterBtn = ({ exercise }: { exercise: IExercise }) => {
  const { saveForLater, setSaveForLater } = useContext(ExerciseContext);

  const isAdded = saveForLater.some(
    (item: IExercise) => item?.id === exercise.id,
  );

  const handleSaveForLater = () => {
    if (isAdded) {
      toast.info("Already Saved For Later");
      return;
    }

    setSaveForLater((prev: IExercise[]) => [...prev, exercise]);

    toast.success("Exercise Saved For Later");
  };

  return (
    <>
      <button
        className="btn btn-sm h-9 min-h-0 border border-gray-700 bg-transparent px-4 text-[14px] font-medium text-gray-300 hover:bg-gray-800"
        onClick={handleSaveForLater}
      >
        {isAdded ? "✓ Saved For Later" : "♡ Save for later"}
      </button>
    </>
  );
};

export default SaveForLaterBtn;