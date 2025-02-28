// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Option from "./components/Options/Option";
// const App = () => {
//   const [hadithData, setHadithData] = useState(null);
//   const [selectedBookName, setSelectedBookName] = useState("bukhari");

//   const selectBookHanlder = (bookname) => {
//     console.log("bookname", bookname);
//     setSelectedBookName(bookname);
//   };

//   // const bookNames = {
//   //   "Sahih al-Bukhari": "bukhari",
//   //   "Sahih Muslim": "muslim",
//   //   "Sunan Abi Dawud": "abudawud",
//   //   "Sunan Ibn Majah": "ibnmajah",
//   //   "Jami` at-Tirmidhi": "tirmidhi",
//   // };

//   useEffect(() => {
//     let url = `https://random-hadith-generator.vercel.app/${selectedBookName}/`;

//     if (selectedBookName) {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => setHadithData(data))
//         .catch((error) => error);
//     }
//   }, [selectedBookName]);

//   return (
//     <div className="center">
//       <div className="box">
//         <h1>Hadith</h1>
//         <strong>Book-Name:{hadithData && hadithData.data.bookName}</strong>
//         <Option data={bookNames} selectBookHanlder={selectBookHanlder} />
//         <h2>{hadithData && hadithData.data.book}</h2>
//         <span className="chp-name">
//           {hadithData && hadithData.data.chapterName}
//         </span>
//         <hr />
//         <b>No:{hadithData && hadithData.data.id}</b>
//         <p className="hadith-english">
//           {hadithData && hadithData.data.hadith_english}
//         </p>
//         <h3>Ref-No:{hadithData && hadithData.data.refno}</h3>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import "./App.css";
import SingleHadith from "./pages/SingleHadith";
const App = () => {
  const [hadithNum, setHadithNum] = useState(null);
  const [hadithName, setHadithName] = useState(null);
  const handleNum = (num, bookName) => {
    setHadithNum(num);
    setHadithName(bookName);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Book handleNum={handleNum} />} path=":id">
          <Route
            element={
              <SingleHadith hadithNum={hadithNum} hadithName={hadithName} />
            }
            path="/:id"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
