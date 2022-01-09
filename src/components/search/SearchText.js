import React from "react";
import { useState } from "react";

import dummyData from "./DummyData";
import "./text.css";

function SearchText() {
  // const [dummyData, setDummyData] =
  //   useState(Data);

  const [searchTerm, setSearchTerm] =
    useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {dummyData
        .filter((value) => {
          if (searchTerm == "") {
            return value;
          } else if (
            value.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((value, key) => {
          return (
            <div key={key}>
              <p>{value.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default SearchText;
