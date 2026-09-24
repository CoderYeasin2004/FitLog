import React from "react";
import ExerciseCard from "@/components/shared/ExerciseCard";
import { IExercise } from "@/types/exercise.type";

const getExerciseCards = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return data;
};

const ExerciseCards = async () => {
  const getExerciseCardsData = await getExerciseCards();


  return (
    <section className="container mx-auto px-4 py-10">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-white">
        THE LIBRARY
      </h2>

      <p className="text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>

      {/* Exercise Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getExerciseCardsData.map((exercise : IExercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>

    </section>
  );
};

export default ExerciseCards;