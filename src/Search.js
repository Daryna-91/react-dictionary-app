import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [word, setWord] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    alert(word);
  }
  function handleChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }
  return (
    <form onSubmit={handleSearch}>
      <input type="search" onChange={handleChange} />
    </form>
  );
}
