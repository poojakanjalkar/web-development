import React, { useState } from "react";
import "./NewBook.css";
export default function NewBook(props) {
  const [enteredText, setEnteredText] = useState("");

  const handleAddBookButton = (event) => {
    event.preventDefault();

    const newBook = { id: Math.random().toString(), name: enteredText };
    console.log("----sjbsb----", newBook);
    props.newBookAdded(newBook);
    setEnteredText("");
  };

  const addUserBook = (event) => {
    const inputText = event.target.value;
    setEnteredText(inputText);
    console.log("--input from user---", inputText);
  };
  return (
    <form className="new-book" onSubmit={handleAddBookButton}>
      <input type="text" value={enteredText} onChange={addUserBook}></input>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}
