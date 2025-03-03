import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Home = ({ setHadithData }) => {
  const parmas = useParams();
  const [data, setData] = useState(null);
  if (parmas.id === "home") {
    console.log(parmas.id);

    setHadithData(null);
  }
  const navigate = useNavigate();
  const bookNames = {
    "Sahih al-Bukhari": "bukhari",
    "Sahih Muslim": "muslim",
    "Sunan Abi Dawud": "abudawud",
    "Sunan Ibn Majah": "ibnmajah",
    "Jami` at-Tirmidhi": "tirmidhi",
  };

  useEffect(() => {
    let result = ["bukhari", "muslim", "abudawud", "ibnmajah", "tirmidhi"];
    let random = Math.floor(Math.random() * result.length);
    let num = result[random];
    let url = `https://random-hadith-generator.vercel.app/${num}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  const { book, bookName, chapterName, hadith_english, header, refno } =
    data?.data || {};
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
      >
        Go to Welcome Page
      </button>
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
            onClick={() => navigate(`/book/${path}`)}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
            <p className="text-gray-600">
              Explore the teachings and wisdom of {name}.
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white mt-12 max-w-6xl p-6 pt-2 rounded-xl shadow-2xl transform transition-all duration-300  hover:shadow-2xl cursor-pointer ">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 mt-12 animate-fade-in">
          Hadith of the day
        </h2>
        <div className="max-w-4xl h-full mx-auto bg-white p-8 rounded-xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{book}</h1>
            <p className="text-lg text-gray-600">{bookName}</p>
            <p className="text-lg text-gray-600">{chapterName}</p>
          </div>

          <div className="mb-6 border-t-2 pt-4 border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800">{header}</h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {hadith_english}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">{refno}</p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 active:scale-95 flex justify-self-end mt-12">
            Next
          </button>
        </div>
      </div>
      <footer className="mt-16 text-center text-gray-600">
        <p>© 2025 Hadith Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
