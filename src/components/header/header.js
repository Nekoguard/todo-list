import React from "react";

import "./header.css";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">TODO</NavLink>
      <NavLink to="/todo-list-page/">Show list</NavLink>
    </nav>
  );
};

export default Header;
