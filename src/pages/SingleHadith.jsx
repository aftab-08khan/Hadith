import React, { useEffect, useState } from "react";

const SingleHadith = ({ hadithNum, hadithName }) => {
  const [hadithData, setHadithData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    let url = `https://random-hadith-generator.vercel.app/${hadithName}/${hadithNum}`;

    if (hadithName && hadithNum) {
      setLoading(true); // Start loading
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setHadithData(data);
          setLoading(false); // Stop loading after data is fetched
        })
        .catch((error) => {
          console.error("Error fetching Hadith:", error);
          setLoading(false); // Stop loading on error
        });
    }
  }, [hadithName, hadithNum]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-2xl font-bold text-gray-800">Loading...</div>
      </div>
    );
  }

  if (!hadithData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-2xl font-bold text-gray-800">
          No Hadith data found.
        </div>
      </div>
    );
  }

  const { book, bookName, chapterName, hadith_english, header, refno } =
    hadithData.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Book and Chapter Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{book}</h1>
          <p className="text-lg text-gray-600">{bookName}</p>
          <p className="text-lg text-gray-600">{chapterName}</p>
        </div>

        {/* Hadith Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{header}</h2>
        </div>

        {/* Hadith Text */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {hadith_english}
          </p>
        </div>

        {/* Reference */}
        <div className="text-right">
          <p className="text-sm text-gray-500">{refno}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleHadith;
