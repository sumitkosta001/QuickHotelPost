import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="relative p-16 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex flex-col justify-center items-center text-gray-800 overflow-hidden">
      {/* Soft background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,100,255,0.08),transparent_70%)] pointer-events-none"></div>

      {/* Shimmer gradient heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold drop-shadow-lg">
        <span className="shining-text">Browse All Templates</span>
      </h2>

      <p className="text-lg mt-2 text-gray-600 animate-fade-in-up delay-200 text-center">
        What would you like to create today?
      </p>

      {/* Custom Search Bar */}
      <div className="mt-8 w-full max-w-2xl">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-lg border border-gray-200 focus-within:ring-4 focus-within:ring-indigo-300 transition-all duration-300">
          <Search className="text-indigo-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search templates..."
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
