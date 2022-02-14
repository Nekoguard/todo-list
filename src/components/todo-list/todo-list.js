import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import { connect } from "react-redux";
import { fetchItems } from "../../actions";
import withTodoListService from "../hoc/withTodoListService";

import "./todo-list.css";
import LoadingIndicator from "../loading-indicator/loading-indicator";
import ErrorIndicator from "../error-indicator/error-indicator";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { loading, error, items } = this.props;

    if (loading) {
      return <LoadingIndicator />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className="todo-list">
        {
          items.length > 0 ? items.map((item) => {
            return (
              <li className="todo-list-item" key={item.id}>
                <TodoListItem isCompleted={item.completed} id={item.id} title={item.title} />
              </li>
            )
          }) : null
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todoItems,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch, { todoListService }) => {
  return {
    fetchItems: () => fetchItems(todoListService, dispatch),
  }
}

export default withTodoListService()(connect(mapStateToProps, mapDispatchToProps)(TodoList));
