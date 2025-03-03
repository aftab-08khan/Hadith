import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleHadith = ({ hadithName, hadithData, setHadithData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id, hadithNum } = useParams();

  useEffect(() => {
    if (!hadithName || !hadithNum) return;
    let url = `https://random-hadith-generator.vercel.app/${id}/${hadithNum}`;

    setLoading(true);
    setError(false);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setHadithData(data);
        } else {
          setHadithData(null);
          setError(true);
        }
      })
      .catch(() => {
        setHadithData(null);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, hadithNum]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="text-lg font-bold text-gray-800 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (hadithData === null || error) {
    console.log("hello");

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-2xl font-bold text-gray-800">
          No Hadith data found.
        </div>
      </div>
    );
  }

  const { book, bookName, chapterName, hadith_english, header, refno } =
    hadithData?.data || {};

  return (
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
  );
};

export default SingleHadith;
