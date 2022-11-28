import React from "react";
import { useState } from "react";

function SearchInput({ onSearch }) {
  const [input, setInput] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    onSearch(input);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search a country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchInput;
