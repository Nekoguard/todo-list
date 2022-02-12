import React from "react";

import "./header.css";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="todo-header">
      <nav className="todo-nav">
        <NavLink className="nav-link logo-link" to="/">TODO</NavLink>
        <NavLink className="nav-link" to="/todo-list-page/">Show list</NavLink>
      </nav>
    </header>
  );
};

export default Header;
