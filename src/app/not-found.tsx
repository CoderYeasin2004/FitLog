import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-black text-[#C2F800]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-md bg-[#C2F800] px-6 py-3 font-bold text-black"
      >
        Back to Home
      </Link>
    </div>
  );
}