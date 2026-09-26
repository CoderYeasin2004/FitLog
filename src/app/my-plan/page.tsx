"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "@/types/exercise.type";
import React, { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import ExerciseCard from "@/components/shared/ExerciseCard";

const ListedWorkouts = () => {
  const {
    addToPlans,
    setAddToPlans,
    saveForLater,
    setSaveForLater,
    completedExercises,
    setCompletedExercises,
  } = useContext(ExerciseContext);

  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTab =
    searchParams.get("tab") === "saved" ? "saved" : "today";

  const exercises = activeTab === "today" ? addToPlans : saveForLater;

  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      setAddToPlans((prev: IExercise[]) =>
        prev.filter((exercise) => exercise.id !== id)
      );
    } else {
      setSaveForLater((prev: IExercise[]) =>
        prev.filter((exercise) => exercise.id !== id)
      );
    }

    setCompletedExercises((prev: number[]) =>
      prev.filter((exerciseId) => exerciseId !== id)
    );

    toast.success("Workout removed");
  };

  const handleDone = (id: number) => {
    if (completedExercises.includes(id)) {
      toast.info("Workout is already marked as done");
      return;
    }

    setCompletedExercises((prev: number[]) => [...prev, id]);

    toast.success("Workout marked as done");
  };

  const [sortBy, setSortBy] = useState<
    "rating" | "minutes" | "calories"
  >("rating");

  const sortExercise = (exercise: IExercise[]) => {
    const sortedExercises = [...exercise];

    if (sortBy === "rating") {
      sortedExercises.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "minutes") {
      sortedExercises.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedExercises.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    return sortedExercises;
  };

  const sortedPlanExercise = sortExercise(addToPlans);
  const sortedSavedExercise = sortExercise(saveForLater);

  const sortedExercises =
    activeTab === "today"
      ? sortedPlanExercise
      : sortedSavedExercise;

  return (
    <div className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8">
      {/* MY PLAN */}
      <h2 className="mt-10 text-2xl font-bold sm:mt-13 sm:text-3xl">
        MY PLAN
      </h2>

      <p className="mt-1 text-xs text-[#9CA3AF]">
        Cap of five lift for today. Finish them, than load more.
      </p>

      {/* STATS */}
      <div className="mt-6 grid grid-cols-3 rounded-xl border border-[#252a34] bg-[#12151b] sm:mt-10">
        {/* Exercises */}
        <div className="relative p-3 sm:p-5">
          <p className="text-[9px] text-gray-500 sm:text-[10px]">
            Exercises
          </p>

          <p className="mt-1 text-xl font-bold text-lime-400 sm:text-2xl">
            {addToPlans.length}
          </p>

          <div className="absolute right-0 top-1/2 h-1/2 -translate-y-1/2 border-r border-[#252a34]" />
        </div>

        {/* Minutes */}
        <div className="relative p-3 sm:p-5">
          <p className="text-[9px] text-gray-500 sm:text-[10px]">
            Minutes
          </p>

          <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
            {addToPlans.reduce(
              (total: number, exercise: IExercise) =>
                total + exercise.duration,
              0
            )}
          </p>

          <div className="absolute right-0 top-1/2 h-1/2 -translate-y-1/2 border-r border-[#252a34]" />
        </div>

        {/* Calories */}
        <div className="p-3 sm:p-5">
          <p className="text-[9px] text-gray-500 sm:text-[10px]">
            Calories
          </p>

          <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
            {addToPlans.reduce(
              (total: number, exercise: IExercise) =>
                total + exercise.caloriesBurned,
              0
            )}
          </p>
        </div>
      </div>

      {/* TABS + SORT */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        {/* Tabs */}
        <div className="flex items-center rounded-lg border border-[#252a34] bg-[#161a22] p-1">
          <button
            onClick={() => router.push("/my-plan")}
            className={`rounded-md px-3 py-1.5 text-[10px] font-medium ${
              activeTab === "today"
                ? "bg-[#252a34] text-white"
                : "text-gray-500"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => router.push("/my-plan?tab=saved")}
            className={`rounded-md px-3 py-1.5 text-[10px] font-medium ${
              activeTab === "saved"
                ? "bg-[#252a34] text-white"
                : "text-gray-500"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-[14px] text-gray-500">
            Sort By
          </span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "rating"
                  | "minutes"
                  | "calories"
              )
            }
            className="rounded-md border border-[#252a34] bg-[#161a22] px-2 py-1.5 text-[12px] text-gray-300 outline-none"
          >
            <option value="minutes">Minutes</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* WORKOUT LIST */}
      <div className="mt-4 space-y-3 pb-16">
        {sortedExercises.length === 0 ? (
          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-dashed border-[#252a34] bg-[#0f1217] px-4 text-center">
            <h3 className="text-[18px] font-bold text-white">
              NOTHING HERE YET
            </h3>

            <p className="mt-1 text-[12px] text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/Workouts"
              className="mt-4 rounded-full bg-lime-400 px-4 py-2 text-[14px] font-semibold text-black hover:bg-lime-300"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          sortedExercises.map((exercise: IExercise) => {
            const isDone = completedExercises.includes(exercise.id);

            return (
              <div
                key={exercise.id}
                className="flex flex-col gap-3 rounded-lg border border-slate-800 bg-[#12151b] p-3 sm:flex-row sm:items-center"
              >
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="h-32 w-full rounded-md object-cover sm:h-16 sm:w-24"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-white">
                    {exercise.name}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {exercise.muscleGroups.join(", ")}
                  </p>

                  <div className="mt-1 flex flex-wrap gap-3 text-[10px] text-slate-400">
                    <span>◷ {exercise.duration} min</span>
                    <span>🔥 {exercise.caloriesBurned} kcal</span>
                    <span>★ {exercise.rating}</span>
                  </div>
                </div>

                <div className="relative z-10 flex w-full gap-2 sm:w-auto">
                  {/* VIEW DETAILS */}
                  <Link
                    href={`/Workouts/${exercise.id}`}
                    className="btn flex-1 rounded-full border border-slate-700 px-3 py-1 text-[10px] text-white sm:flex-none"
                  >
                    View Details
                  </Link>

                  {/* MARK AS DONE */}
                  <button
                    type="button"
                    onClick={() => handleDone(exercise.id)}
                    className={`btn flex-1 rounded-full px-3 py-1 text-[14px] font-medium sm:flex-none ${
                      isDone
                        ? "bg-lime-700 text-slate-300"
                        : "bg-lime-400 text-black"
                    }`}
                  >
                    {isDone ? "Done ✓" : "✓ Mark as Done"}
                  </button>

                  {/* REMOVE */}
                  <button
                    type="button"
                    onClick={() => handleRemove(exercise.id)}
                    className="px-2 text-slate-500 hover:text-white"
                  >
                    ×
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ListedWorkouts;