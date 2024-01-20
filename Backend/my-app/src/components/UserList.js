import React from "react";
import "./UserList.css";

export default function UserList() {
  return (
    <form className="new-list">
      <input type="text"></input>
      <button type="submit">Add To Do</button>
    </form>
  );
}
