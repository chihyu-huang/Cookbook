import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

import "./static/SearchBar.css";



export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:8080/api/recipes")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((recipe) => {
          return (
            value &&
            recipe &&
            recipe.name &&
            recipe.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};