"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { ExerciseContext } from "@/context/ExerciseContext";

const Navbar = () => {
  const { addToPlans, saveForLater } = useContext(ExerciseContext);
  const pathname = usePathname();

  // Active navigation
  const isWorkouts =
    pathname === "/" || pathname === "/Workouts";

  const isMyPlan =
    pathname === "/my-plan";

  return (
    <nav className="w-full border-b border-[#444952] bg-[#0c0d10]">
      <div className="navbar container mx-auto w-full max-w-[1400px] px-2 sm:px-5 lg:px-8">

        {/* ================= LEFT ================= */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown md:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-xs px-1 text-[#9CA3AF]"
              aria-label="Open navigation menu"
            >
              ☰
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-10 mt-3 w-40 rounded-box bg-[#15171D] p-2 text-[#9CA3AF] shadow-lg"
            >
              {/* Mobile Workouts */}
              <li>
                <Link
                  href="/Workouts"
                  className={
                    isWorkouts
                      ? "bg-[#182000] text-[#C2F800]"
                      : "text-[#9CA3AF]"
                  }
                >
                  Workouts
                </Link>
              </li>

              {/* Mobile My Plan */}
              <li>
                <Link
                  href="/my-plan"
                  className={
                    isMyPlan
                      ? "bg-[#182000] text-[#C2F800]"
                      : "text-[#9CA3AF]"
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              width={25}
              height={25}
              priority
            />

            <h2 className="text-xs font-bold text-white sm:text-xl">
              FITLOG
            </h2>
          </Link>
        </div>

        {/* ================= CENTER ================= */}
        {/* Desktop Navigation */}
        <div className="navbar-center hidden md:flex">
          <div className="flex items-center gap-2">

            {/* Workouts */}
            <Link
              href="/Workouts"
              className={`rounded-2xl px-4 py-2 text-sm transition-all duration-200 ${
                isWorkouts
                  ? "bg-[#182000] text-[#C2F800]"
                  : "text-[#9CA3AF] hover:text-[#C2F800]"
              }`}
            >
              Workouts
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              className={`rounded-2xl px-4 py-2 text-sm transition-all duration-200 ${
                isMyPlan
                  ? "bg-[#182000] text-[#C2F800]"
                  : "text-[#9CA3AF] hover:text-[#C2F800]"
              }`}
            >
              My Plan
            </Link>

          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="navbar-end">
          <div className="flex items-center gap-1.5 sm:gap-5">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-0.5 text-[9px] text-[#9CA3AF] transition-colors duration-200 hover:text-[#C2F800] sm:gap-1 sm:text-sm"
            >
              <span>Plan</span>

              <span className="badge badge-xs rounded-full px-1 text-[8px] text-[#ccff00] outline-1 sm:badge-sm sm:text-xs">
                {addToPlans.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan?tab=saved"
              className="flex items-center gap-0.5 text-[9px] text-[#9CA3AF] transition-colors duration-200 hover:text-[#C2F800] sm:gap-1 sm:text-sm"
            >
              <span>Saved</span>

              <span className="badge badge-xs rounded-full px-1 text-[8px] text-[#ccff00] outline-1 sm:badge-sm sm:text-xs">
                {saveForLater.length}
              </span>
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
