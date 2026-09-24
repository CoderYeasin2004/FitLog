import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'


const Navbar = () => {
    return (
        <div className="navbar border-b border-[#9CA3AF] bg-[#0c0d10] px-3 sm:px-5">

  {/* LEFT */}
  <div className="navbar-start">

    {/* Hamburger - Mobile only */}
    <div className="dropdown md:hidden">
      <button
        tabIndex={0}
        className="btn btn-ghost btn-sm"
      >
        ☰
      </button>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 p-2 shadow"
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
   <div className='flex flex-2 gap-3'>
     <Image  src = {logo}/>
     <h2 className='font-bold'>FITLOG</h2>
   </div>

  </div>


  {/* CENTER */}
  <div className="navbar-center hidden md:flex">
    <div className="flex gap-2">

      <a className="btn btn-ghost btn-sm text-[#9CA3AF] hover:text-[#C2F800] rounded-2xl">
        Workouts
      </a>

      <a className="btn btn-ghost btn-sm text-[#9CA3AF] hover:text-[#C2F800] rounded-2xl">
        My Plan
      </a>

    </div>
  </div>


  {/* RIGHT */}
  <div className="navbar-end">

    <div className="flex items-center gap-3 sm:gap-5">

      {/* Plan */}
      <div className="hidden sm:flex items-center gap-1 text-xs sm:text-sm text-[#9CA3AF] ">
        <span>Plan</span>
        <span className="badge text-[#9CA3AF] badge-xs sm:badge-sm outline-1 rounded-4xl">
          0
        </span>
      </div>

      {/* Saved */}
      <div className="hidden sm:flex items-center gap-1 text-xs sm:text-sm text-[#9CA3AF]">
        <span>Saved</span>
        <span className="badge text-[#9CA3AF] badge-xs sm:badge-sm outline-1 rounded-4xl">
          0
        </span>
      </div>

    </div>

  </div>

</div>
    );
};

export default Navbar;