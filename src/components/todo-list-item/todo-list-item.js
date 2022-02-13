import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTrash, faSquareCheck} from "@fortawesome/free-solid-svg-icons";

import "./todo-list-item.css";

library.add(faSquareCheck, faTrash);

const TodoListItem = ({title}) => {
  return (
    <Fragment>
      <span>{title}</span>

      <div className="actions">
        <button><FontAwesomeIcon icon={ faSquareCheck }/></button>
        <button><FontAwesomeIcon icon={ faTrash } /></button>
      </div>
    </Fragment>
  );
};

export default TodoListItem;
