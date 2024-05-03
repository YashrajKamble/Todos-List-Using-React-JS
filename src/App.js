import "./App.css";
import Header from "./MyComponent/Header";
import { Footer } from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
import React, { useState } from "react";
import { AddTodo } from "./MyComponent/AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.slice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Title-1",
      desc: "Description-1",
    },
    {
      sno: 2,
      title: "Title-2",
      desc: "Description-2",
    },
    {
      sno: 3,
      title: "Title-3",
      desc: "Description-3",
    },
  ]);
  return (
    <>
      <Header title="My Todos List " searchBar={true} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
