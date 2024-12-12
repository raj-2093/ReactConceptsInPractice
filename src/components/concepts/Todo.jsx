import React from "react";
import { ACTIONS } from "../../pages/concepts/ConceptUseReducer";
// import { ACTIONS } from "../../pages/concepts/ConceptUseReducer";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.complete ? "line-through" : "none",
        }}
      >
        {todo.todo}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
          // return dispatch({ type: "toggle_todo", payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
