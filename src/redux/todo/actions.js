import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const createTodo = createAction("CREATETODO", (value) => {
  return {
    payload: {
      id: nanoid(),
      title: value,
      completed: false,
    },
  };
});

export const updateCompleted = createAction(
  "UPDATECOMPLETED",
  (id, completed) => {
    return {
      payload: {
        id: id,
        completed: completed,
      },
    };
  }
);

// export const createTodo = (todo) => {
//   return { type: CREATETODO, payload: todo };
// };