import React, { useState } from "react";
import "./UserList.css";

export default function UserList(props) {
  const [inputText, setInputText] = useState("");

  const handleUserInput = (event) => {
    setInputText(event.target.value);
  };
  const handleAddButton = (event) => {
    event.preventDefault();
    const newList = [{ id: Math.random().toString(), name: inputText }];
    console.log(newList);
    props.newListHandler(newList);
    setInputText("");
  };
  return (
    <form className="new-list" onSubmit={handleAddButton}>
      <input type="text" value={inputText} onChange={handleUserInput}></input>
      <button type="submit">Add To Do</button>
    </form>
  );
}
