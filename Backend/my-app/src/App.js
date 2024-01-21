import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import UserList from "./components/UserList";

export default function App() {
  const [toDoList, setToDoList] = useState([
    { id: "1", name: "Reading" },
    { id: "2", name: "Learning" },
    { id: "3", name: "Shopping" },
    { id: "4", name: "Playing" },
  ]);

  const newListHandler = (newList) => {
    setToDoList((prevList) => {
      return prevList.concat(newList);
    });
  };
  return (
    <div>
      <h1 className="header">TO DO let's start</h1>
      <UserList newListHandler={newListHandler} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}
