import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTodosByFilter,
  completedTodo,
  removeTodo,
} from "../redux/todos/todosSlice";

const TodoList = () => {
  let todos = useSelector(selectTodosByFilter);

  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todoItem) => (
        <li
          key={todoItem.id}
          className={todoItem.completedState ? "completed" : ""}
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todoItem.completedState}
              onChange={() => dispatch(completedTodo(todoItem.id))} // onChange yerine onClick de verilebilirdi.
            />
            <label>{todoItem.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(removeTodo(todoItem.id))}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
