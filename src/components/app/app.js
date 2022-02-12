import React from "react";

import "./app.css";
import Header from "../header/header";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page";
import TodoListPage from "../pages/todo-list-page";

const App = () => {
  return (
    <div className="todo-app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-list-page/" element={<TodoListPage />} />
      </Routes>
    </div>
  );
};

export default App;
