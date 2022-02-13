import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { TodoListServiceProvider } from "./components/todoListServiceContext/todo-list-service-context";
import TodoListService from "./services/todo-list-service";

import App from "./components/app/app";
import store from "./store";

const todoListService = new TodoListService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListServiceProvider value={todoListService}>
        <Router>
          <App />
        </Router>
      </TodoListServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
