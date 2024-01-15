import React from "react";
import "./BookList.css";
export default function BookList(props) {
  console.log(props.newList);
  return (
    <ul className="book-list">
      {props.newList.map((book) => {
        return <li key={book.id}>{book.name} </li>;
      })}
    </ul>
  );
}
