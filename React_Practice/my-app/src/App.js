import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import NewBook from "./components/NewBook";

export default function App() {
  const bookList = [
    { id: 1, name: "Atomic Habits" },
    { id: 2, name: "Zero to Hero" },
    { id: 1, name: "Word Power Made Easy" },
    { id: 1, name: "Rich Dad Poor Dad" },
  ];

  const newBookAdded = (newBook) => {
    bookList.push(newBook);
    console.log("---list is--", bookList);
  };
  return (
    <div>
      <h1 className="book-name">Books</h1>

      <NewBook newBookAdded={newBookAdded} />

      <BookList newList={bookList} />
    </div>
  );
}
