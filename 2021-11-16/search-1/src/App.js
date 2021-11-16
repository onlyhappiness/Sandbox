/* eslint-disable */
import React, { useState } from 'react'

import './App.css'
import jsonData from './Data.json';

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <input 
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {
        jsonData.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>{ val.author }</p>
            </div>
          )
        } )
      }
    </div>
  )
}

export default App
