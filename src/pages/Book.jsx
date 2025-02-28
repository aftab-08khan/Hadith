import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const Book = ({ handleNum }) => {
  const params = useParams();
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold capitalize text-gray-800 mb-6">
          {params?.id.replace(/-/g, " ")}
        </h1>

        <div className="mb-8 flex space-x-4">
          <input
            type="text"
            placeholder="Search Hadith Number"
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 active:scale-95"
            onClick={() => handleNum(search, params?.id)}
          >
            Search
          </button>
        </div>

        {/* Outlet for Nested Routes */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Book;
