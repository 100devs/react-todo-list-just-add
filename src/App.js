import { useState } from "react";
// imports the useState hook (React v6.18) which allows you to use state without classes
import Header from "./components/Header";
// imports the Header component from the components folder
import List from "./components/List";
// imports List component from components folder
import AddTodo from "./components/AddTodo";
// imports AddTodo component from components folder

function App() {
  // creates function "App" with props

  const [todos, setTodos] = useState([
    // deconstructs todos and setTodos
    {
      id: 1,
      // prop = id, value = 1
      item: "Drink Water",
      // prop = item, value = drink water
    },
    {
      id: 2,
      // prop = id, value = 2
      item: "Make Healthy Dinner",
      // prop = item, value = make healthy dinner
    },
    {
      id: 3,
      // prop = id, value = 3
      item: "Exercise",
      // prop = item, value = exercise
    },
  ]);

  const addTodo = (todo) => {
    // addTodo function with todo param
    const id = Math.ceil(Math.random() * 100000);
    // sets const id to a random large number rounded up (ceil)
    const newTodo = { id, ...todo };
    // sets const newTodo to id and todo spread
    setTodos([...todos, newTodo]);
    // see app App function above... calling the setTodos in the App
  };

  return (
    //returns (renders?) the following to the browser:
    <div className="container">
      {/* div-tag/element with className "container" */}
      <Header title="Todo List" />
      {/* Header-tag/element with title "Todo List" */}
      <AddTodo onAdd={addTodo} />
      {/* AddToDo onAdd(see line 35, adds the new todo) */}
      <List todos={todos} />
      {/* List todo from component */}
    </div>
  );
}

export default App;
// this exports the App (allows the importing of the app)
