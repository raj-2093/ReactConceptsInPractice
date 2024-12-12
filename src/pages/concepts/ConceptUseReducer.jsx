import React, { useReducer, useState } from "react";
import Todo from "../../components/concepts/Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      console.log("Todos - ", todos);
      return [...todos, addTodo(action.payload.todo)];

    case ACTIONS.TOGGLE_TODO:
      console.log("reducer Todos - ", todos);
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

function addTodo(todo) {
  return { id: Date.now(), todo: todo, complete: false };
}

export default function ConceptUseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
    setTodo("");
  }

  console.log(todos);

  return (
    <div>
      <h2>This page demonstrates the use of useReducer hook</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add your todo here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </form>

      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}
