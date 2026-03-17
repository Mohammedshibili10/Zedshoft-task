import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          TodoApp
        </h1>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-80">
          <input
            type="text"
            placeholder="Search todos..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">

          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 font-medium transition"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 font-medium transition"
          >
            Tasks
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 font-medium transition"
          >
            Settings
          </a>

          {/* Profile */}
          <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
            S
          </div>

        </div>

      </div>

    </nav>
  );
}
