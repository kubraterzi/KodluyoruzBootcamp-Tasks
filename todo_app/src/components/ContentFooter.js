import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCompletedTodos,
  changeActiveFilter,
  selectTodoItems,
} from "../redux/todos/todosSlice";

const ContentFooter = () => {
  const dispatch = useDispatch();

  const todoList = useSelector(selectTodoItems);
  const uncompletedTodosCount = todoList.filter(
    (item) => !item.completedState
  ).length;

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompletedTodosCount}</strong> item
        {uncompletedTodosCount > 1 && "s"} left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompletedTodos())}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
