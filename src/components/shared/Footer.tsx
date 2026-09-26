import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0d1117]">
      <div className="container mx-auto flex min-h-[70px] flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={25}
            height={25}
            className="h-6 w-6 sm:h-7 sm:w-7"
          />

          <h2 className="text-xs font-bold text-white sm:text-sm">
            FITLOG
          </h2>
        </Link>

        {/* Copyright */}
        <p className="max-w-[220px] text-center text-[10px] leading-4 text-slate-500 sm:max-w-none sm:text-right sm:text-[14px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}