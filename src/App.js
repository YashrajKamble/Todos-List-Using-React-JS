import "./App.css";
import Header from "./MyComponent/Header";
import { Footer } from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
import React, { useEffect, useState } from "react";
import { AddTodo } from "./MyComponent/AddTodo";
import { About } from "./MyComponent/About";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Switch } from 'react-router-dom';

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.slice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List " searchBar={true} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
