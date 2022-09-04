import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
export default function Search() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }
  function handleChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="search" onChange={handleChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
