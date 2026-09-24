import Image from "next/image";
import React from "react";
import { IExercise } from "@/types/exercise.type";

interface ExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-[#292C33] bg-[#15171D] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#C2F800] hover:shadow-[0_10px_30px_rgba(194,248,0,0.12)]">

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden sm:h-56">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-lg font-black uppercase leading-tight text-white transition-colors duration-300 group-hover:text-[#C2F800]">
          {exercise.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-[#8B919C]">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292C33]" />

        {/* Info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9CA3AF]">

          <span className="flex items-center gap-1">
            ◷ {exercise.duration} min
          </span>

          <span className="flex items-center gap-1">
            ● {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            ☆ {exercise.rating}
          </span>

        </div>

      </div>
    </div>
  );
};

export default ExerciseCard;