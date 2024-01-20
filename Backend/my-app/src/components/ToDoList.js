import React from "react";
import "./ToDoList.css";
export default function ToDoList(props) {
  return props.toDoList.map((list) => {
    return (
      <ul class="styled-list">
        <li key={list.id}>{list.name}</li>
      </ul>
    );
  });
}
