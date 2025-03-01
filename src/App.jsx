import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import SingleHadith from "./pages/SingleHadith";
import Welcome from "./pages/Welcome";

const App = () => {
  const [hadithNum, setHadithNum] = useState(null);
  const [hadithName, setHadithName] = useState(null);
  const handleNum = (num, bookName) => {
    setHadithNum(num);
    setHadithName(bookName);
  };
  const [hadithData, setHadithData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/home" element={<Home setHadithData={setHadithData} />} />

        {/* ✅ Book Page Route */}
        <Route
          path="/book/:id"
          element={<Book hadithData={hadithData} handleNum={handleNum} />}
        >
          {/* ✅ Fix the Nested Route: ONLY "hadith/:hadithNum" */}
          <Route
            path="hadith/:hadithNum"
            element={
              <SingleHadith
                hadithNum={hadithNum}
                hadithName={hadithName}
                hadithData={hadithData}
                setHadithData={setHadithData}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
