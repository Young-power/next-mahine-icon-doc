import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-300 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
