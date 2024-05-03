import React from "react";
import { TodoItem } from "../MyComponent/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="">Todo Lists</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
