import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#444952] bg-[#0c0d10]">
      <div className="navbar container mx-auto w-full max-w-[1400px] px-2 sm:px-5 lg:px-8">

        {/* ================= LEFT ================= */}
        <div className="navbar-start">

          {/* Hamburger - Mobile */}
          <div className="dropdown md:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-xs px-1 text-[#9CA3AF]"
            >
              ☰
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-10 mt-3 w-40 rounded-box bg-[#15171D] p-2 text-[#9CA3AF] shadow"
            >
              <li>
                <Link href="/Workouts">
                  Workouts
                </Link>
              </li>

              <li>
                <Link href="/my-plan">
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
            />

            <h2 className="text-xs font-bold text-white sm:text-xl">
              FITLOG
            </h2>
          </Link>

        </div>


        {/* ================= CENTER ================= */}
        {/* Desktop only */}
        <div className="navbar-center hidden md:flex">
          <div className="flex items-center gap-2">

            <Link
              href="/Workouts"
              className="btn btn-ghost btn-sm rounded-2xl px-3 text-sm text-[#9CA3AF] transition hover:text-[#C2F800]"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="btn btn-ghost btn-sm rounded-2xl px-3 text-sm text-[#9CA3AF] transition hover:text-[#C2F800]"
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
              className="flex items-center gap-0.5 text-[9px] text-[#9CA3AF] sm:gap-1 sm:text-sm"
            >
              <span>Plan</span>

              <span className="badge badge-xs rounded-full px-1 text-[8px] text-[#ccff00] outline-1 sm:badge-sm sm:text-xs">
                0
              </span>
            </Link>


            {/* Saved */}
            <Link
              href="/saved"
              className="flex items-center gap-0.5 text-[9px] text-[#9CA3AF] sm:gap-1 sm:text-sm"
            >
              <span>Saved</span>

              <span className="badge badge-xs rounded-full px-1 text-[8px] text-[#ccff00] outline-1 sm:badge-sm sm:text-xs">
                0
              </span>
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;