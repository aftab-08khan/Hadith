import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const bookNames = {
    "Sahih al-Bukhari": "bukhari",
    "Sahih Muslim": "muslim",
    "Sunan Abi Dawud": "abudawud",
    "Sunan Ibn Majah": "ibnmajah",
    "Jami` at-Tirmidhi": "tirmidhi",
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-12 animate-fade-in">
        Welcome to Hadith Universe
      </h1>

      <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {Object.entries(bookNames).map(([name, path], index) => (
          <div
            key={path}
            style={{
              padding: "12px 24px",
            }}
            className="bg-white p-6 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer "
            onClick={() => navigate(`/${path}`)}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
            <p className="text-gray-600">
              Explore the teachings and wisdom of {name}.
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        <p>© 2023 Hadith Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
