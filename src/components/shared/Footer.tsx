import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0c0d10]">
      <div className="container mx-auto flex min-h-[70px] flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={40}
            height={40}
            className="h-6 w-6 sm:h-7 sm:w-7"
          />

          <h2 className="text-xs font-bold text-white sm:text-sm">FITLOG</h2>
        </div>

        {/* Copyright */}
        <p className="max-w-[220px] text-center text-[12px] leading-4 text-slate-500 sm:ml-4 sm:max-w-none sm:text-right sm:text-[14px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
