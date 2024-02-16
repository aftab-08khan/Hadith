import React, { useEffect, useState } from "react";
import "./App.css";
import Option from "./components/Options/Option";
const App = () => {
  const [hadithData, setHadithData] = useState(null);
  const [selectedBookName, setSelectedBookName] = useState("bukhari");

  const selectBookHanlder = (bookname) => {
    console.log("bookname", bookname);
    setSelectedBookName(bookname);
  };

  const bookNames = {
    "Sahih al-Bukhari": "bukhari",
    "Sahih Muslim": "muslim",
    "Sunan Abi Dawud": "abudawud",
    "Sunan Ibn Majah": "ibnmajah",
    "Jami` at-Tirmidhi": "tirmidhi",
  };

  useEffect(() => {
    let url = `https://random-hadith-generator.vercel.app/${selectedBookName}/`;

    if (selectedBookName) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setHadithData(data))
        .catch((error) => error);
    }
  }, [selectedBookName]);

  return (
    <div className="center">
      <div className="box">
        <h1>Hadith</h1>
        <strong>Book-Name:{hadithData && hadithData.data.bookName}</strong>
        <Option data={bookNames} selectBookHanlder={selectBookHanlder} />
        <h2>{hadithData && hadithData.data.book}</h2>
        <span className="chp-name">
          {hadithData && hadithData.data.chapterName}
        </span>
        <hr />
        <b>No:{hadithData && hadithData.data.id}</b>
        <p className="hadith-english">
          {hadithData && hadithData.data.hadith_english}
        </p>
        <h3>Ref-No:{hadithData && hadithData.data.refno}</h3>
      </div>
    </div>
  );
};

export default App;
