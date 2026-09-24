import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/banner.png' 

const Banner = () => {
    return (
        <div>
           <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto w-full max-w-8xl rounded-xl border border-gray-800 bg-[#15171D] px-6 py-12 sm:px-8 lg:px-10">

    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

      {/* Left Side */}
      <div>
        <h5 className="mb-4 text-[10px] font-bold tracking-wider text-[#C2F800]">
          WORKOUT LIBRARY
        </h5>

        <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
          TRAIN WITH INTENT. LOG
          <br />
          EVERY SET.
        </h2>

        <p className="mt-4 max-w-md text-sm leading-5 text-gray-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today`s plan, and watch the week`s work add up.
        </p>

        <button className="mt-5 block mx-auto rounded-md bg-[#C2F800] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#c5ff33] md:mx-0">
  BROWSE WORKOUTS
</button>
      </div>

      {/* Right Side */}
      <div className="flex justify-center md:justify-end">
        <Image
          src={bannerImg}
          alt="Workout"
          width={220}
          height={220}
          className="h-auto w-44 sm:w-52 md:w-56 lg:w-64"
        />
      </div>

    </div>

  </div>
</section>
        </div>
    );
};

export default Banner;