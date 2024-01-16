import React from "react";
import "./NewBook.css";
export default function NewBook(props) {
  const handleAddBookButton = (event) => {
    event.preventDefault();

    const newBook = { id: "4", name: "new book added" };
    console.log("----sjbsb----", newBook);
    props.newBookAdded(newBook);
  };
  return (
    <form className="new-book" onSubmit={handleAddBookButton}>
      <input type="text"></input>
      <button>ADD BOOK</button>
    </form>
  );
}
