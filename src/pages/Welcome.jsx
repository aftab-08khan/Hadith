import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <div className="min-h-screen w-full flex justify-center flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Welcome to Hadith Universe!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Read, Search, and Grow on the Sunnah. 🌙🌿📖
        </p>
        <button
          onClick={() => navigate("/home")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default Welcome;
