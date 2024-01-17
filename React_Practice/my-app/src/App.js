import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import NewBook from "./components/NewBook";

export default function App() {
  const [bookList, setBookList] = useState([
    { id: 1, name: "Atomic Habits" },
    { id: 2, name: "Zero to Hero" },
    { id: 1, name: "Word Power Made Easy" },
    { id: 1, name: "Rich Dad Poor Dad" },
  ]);

  const newBookAdded = (newBook) => {
    setBookList((prevBook) => {
      return prevBook.concat(newBook);
    });
  };
  return (
    <div>
      <h1 className="book-name">Books</h1>

      <NewBook newBookAdded={newBookAdded} />

      <BookList newList={bookList} />
    </div>
  );
}
