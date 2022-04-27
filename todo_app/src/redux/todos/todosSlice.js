import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: nanoid(4),
        title: "Learn React",
        completedState: true,
      },
      {
        id: nanoid(4),
        title: "Learn Javascript",
        completedState: false,
      },
      {
        id: nanoid(4),
        title: "Read a book",
        completedState: true,
      },
      {
        id: nanoid(4),
        title: "Learn React",
        completedState: false,
      },
      {
        id: nanoid(4),
        title: "Learn Javascript",
        completedState: false,
      },
      {
        id: nanoid(4),
        title: "Read a book",
        completedState: true,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items = [
        ...state.items,
        {
          id: nanoid(4),
          title: action.payload,
          completedState: false,
        },
      ];
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCompletedTodos: (state) => {
      state.items = state.items.filter((item) => !item.completedState);
    },
    completedTodo: (state, action) => {
      state.items.map((todoItem) => {
        if (todoItem.id === action.payload) {
          todoItem.completedState = !todoItem.completedState;
        }
      });
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const selectTodoItems = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const selectTodosByFilter = (state) => {
  if (state.todos.activeFilter !== "all") {
    return state.todos.items.filter((item) =>
      state.todos.activeFilter === "active"
        ? item.completedState === false
        : item.completedState === true
    );
  }
  return state.todos.items;
};

export const {
  completedTodo,
  addTodo,
  removeTodo,
  clearCompletedTodos,
  changeActiveFilter,
} = todosSlice.actions;
export default todosSlice.reducer;
