import React from "react";
import "./Option.css";
const Option = ({ data, selectBookHanlder }) => {
  console.log("Option data", Object.entries(data));
  return (
    <div>
      <form>
        <label for="book">Choose a Book:</label>
        <select
          id="book"
          name="book"
          onChange={(e) => selectBookHanlder(e.target.value)}
        >
          <option>Select Option</option>
          {Object.entries(data).map((book, index) => {
            return (
              <option value={book[1]} id={index}>
                {book[0]}
              </option>
            );
          })}
        </select>
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
};

export default Option;
