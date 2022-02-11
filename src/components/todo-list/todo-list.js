import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = () => {
  return (
    <div>
      List:
      <TodoListItem />
    </div>
  );
};

export default TodoList;
