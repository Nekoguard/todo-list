import React, { Fragment } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck, faPen } from "@fortawesome/free-solid-svg-icons";

import "./todo-list-item.css";
import { onItemToggleCompleted } from "../../actions";

library.add(faCheck, faTrash, faPen);

const TodoListItem = ({title, id, isCompleted, onToggleCompleted}) => {
  const toggleCompleted = (e) => {
    onToggleCompleted(e.currentTarget.id);
  }

  return (
    <Fragment>
      <span className={isCompleted ? "title completed" : "title"}>{title} ({id})</span>

      <div className="actions">
        <button className="action-btn edit-btn" onClick={() => {}}>
          <FontAwesomeIcon icon={ faPen }/>
        </button>
        <button id={id} className="action-btn done-btn" onClick={toggleCompleted}>
          <FontAwesomeIcon icon={ faCheck }/>
        </button>
        <button className="action-btn trash-btn" onClick={() => {}}>
          <FontAwesomeIcon icon={ faTrash } />
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.todoItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleCompleted: (id) => dispatch(onItemToggleCompleted(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
