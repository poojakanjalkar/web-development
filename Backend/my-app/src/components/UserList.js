import React from "react";
import "./UserList.css";

export default function UserList(props) {
  const handleAddButton = (event) => {
    event.preventDefault();
    const newList = [{ id: "3", name: "my new List" }];
    console.log(newList);
    props.newListHandler(newList);
  };
  return (
    <form className="new-list" onSubmit={handleAddButton}>
      <input type="text"></input>
      <button type="submit">Add To Do</button>
    </form>
  );
}
