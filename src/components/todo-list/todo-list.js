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
    const { loading, error, items, currentPage, perPage, totalPages } = this.props;

    const pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
      pagesArray[i] = items.slice((i*perPage), (i*perPage) + perPage);
    }

    if (loading) {
      return <LoadingIndicator />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className="todo-list">
        {
          pagesArray.length > 0 ? pagesArray[currentPage - 1].map((item) => {
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
    error: state.error,
    currentPage: state.currentPage,
    perPage: state.perPage,
    totalPages: state.totalPages
  }
}

const mapDispatchToProps = (dispatch, { todoListService }) => {
  return {
    fetchItems: () => fetchItems(todoListService, dispatch),
  }
}

export default withTodoListService()(connect(mapStateToProps, mapDispatchToProps)(TodoList));
