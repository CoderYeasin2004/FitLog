import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#444952] bg-[#0c0d10]">

      <div className="navbar container mx-auto w-full max-w-[1400px] px-3 sm:px-5 lg:px-8">

        {/* LEFT */}
        <div className="navbar-start">

          {/* Hamburger - Mobile */}
          <div className="dropdown md:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-sm text-[#9CA3AF]"
            >
              ☰
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-10 mt-3 w-48 rounded-box bg-[#15171D] p-2 text-[#9CA3AF] shadow"
            >
              <li>
                <a>Workouts</a>
              </li>

              <li>
                <a>My Plan</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={32}
              height={32}
            />

            <h2 className="text-lg font-bold text-white sm:text-xl">
              FITLOG
            </h2>
          </div>

        </div>


        {/* CENTER */}
        <div className="navbar-center hidden md:flex">
          <div className="flex gap-2">

            <a className="btn btn-ghost btn-sm rounded-2xl text-[#9CA3AF] transition hover:text-[#C2F800]">
              Workouts
            </a>

            <a className="btn btn-ghost btn-sm rounded-2xl text-[#9CA3AF] transition hover:text-[#C2F800]">
              My Plan
            </a>

          </div>
        </div>


        {/* RIGHT */}
        <div className="navbar-end">

          <div className="flex items-center gap-3 sm:gap-5">

            {/* Plan */}
            <div className="hidden items-center gap-1 text-xs text-[#9CA3AF] sm:flex sm:text-sm">
              <span>Plan</span>

              <span className="badge badge-xs rounded-4xl text-[#ccff00] outline-1 sm:badge-sm">
                0
              </span>
            </div>


            {/* Saved */}
            <div className="hidden items-center gap-1 text-xs text-[#9CA3AF] sm:flex sm:text-sm">
              <span>Saved</span>

              <span className="badge badge-xs rounded-4xl text-[#ccff00] outline-1 sm:badge-sm">
                0
              </span>
            </div>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;