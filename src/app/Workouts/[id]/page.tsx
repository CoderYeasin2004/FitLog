import AddToPlanBtn from "@/components/exerciseDetails/AddToPlanBtn";
import SaveForLaterBtn from "@/components/exerciseDetails/SaveForLaterBtn";
import { IExercise } from "@/types/exercise.type";

interface IExerciseCardDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getExercise = async (id: string): Promise<IExercise> => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercise");
  }

  return response.json();
};

const ExerciseCardDetailsPage = async ({
  params,
}: IExerciseCardDetailsPageProps) => {
  const { id } = await params;

  const exercise = await getExercise(id);

  return (
    <main className="min-h-screen bg-[#0d0f14] px-4 py-8 md:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">

          {/* IMAGE */}
          <div className="w-full">
            <img
              src={exercise.image}
              alt={exercise.name}
              className="h-[400px] w-full rounded-lg object-cover lg:h-[500px]"
            />
          </div>

          {/* DETAILS  */}
          <div className="pt-1">

            {/* Title */}
            <h1 className="text-2xl font-extrabold uppercase leading-tight text-white md:text-3xl font-">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="mt-2 max-w-xl text-xs leading-5 text-gray-400">
              {exercise.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-3 flex flex-wrap gap-2">
              {exercise.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="rounded-full bg-lime-400 px-3 py-1 text-[14px] font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* INFORMATION */}
            <div className="mt-4 overflow-hidden rounded-lg border border-[#252a34] bg-[#161a22]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#252a34] px-4 py-3">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Equipment
                </span>

                <span className="text-[14px] text-gray-300">
                  {exercise.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#252a34] px-4 py-3">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Difficulty
                </span>

                <span className="text-[14px] text-gray-300">
                  {exercise.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#252a34] px-4 py-3">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Sets
                </span>

                <span className="text-[14px] text-gray-300">
                  {exercise.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#252a34] px-4 py-3">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Reps
                </span>

                <span className="text-[14px] text-gray-300">
                  {exercise.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#252a34] px-4 py-3">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Duration
                </span>

                <span className="text-[14px] text-gray-300">
                  {exercise.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#252a34] px-4 py-3">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Calories
                </span>

                <span className="text-[14px] text-gray-300">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Rating
                </span>

                <span className="text-[14px] text-gray-300">
                  {exercise.rating}
                </span>
              </div>

            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-5">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-2 space-y-2">
                {exercise.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-[12px] leading-4 text-gray-400"
                  >
                    <span className="mr-2 text-gray-500">
                      {index + 1}.
                    </span>

                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-5 flex flex-wrap gap-2">

              <AddToPlanBtn exercise={exercise} />

              <SaveForLaterBtn exercise={exercise} />

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseCardDetailsPage;