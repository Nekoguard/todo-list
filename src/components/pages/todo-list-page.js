import React from "react";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";
import Pagination from "../pagination/pagination";

const TodoListPage = () => {
  return (
    <div className="list-page">
      <ItemAddForm />

      <h2 className="list-page-title">What needs to be done:</h2>

      <TodoList />

      <Pagination />
    </div>
  );
};

export default TodoListPage;
