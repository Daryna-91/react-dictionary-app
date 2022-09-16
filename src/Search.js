import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
import Photos from "./Photos";
export default function Search() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000017b9f695c93654d98812c085409c7d3b9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Type a word here"
        />
        <div className="example">Example: hello, buy, book etc.</div>
      </form>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
