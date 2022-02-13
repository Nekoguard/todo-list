import React from "react";
import { TodoListServiceConsumer } from "../todoListServiceContext/todo-list-service-context";

const withTodoListService = () => (Wrapped) => {
  return (props) => {
    return (
      <TodoListServiceConsumer>
        {
          (todoListService) => {
            return (<Wrapped {...props}
                             todoListService={todoListService}/>);
          }
        }
      </TodoListServiceConsumer>
    );
  }
};

export default withTodoListService;
