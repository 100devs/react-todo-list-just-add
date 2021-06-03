import { useState } from "react"; // bring in the useState hook
import Header from "./components/Header"; // bring in the Header component
import List from "./components/List"; // bring in the List component
import AddTodo from "./components/AddTodo"; // bring in the AddTodo component

function App() {
  // establishes the initial state of our todo list
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
  // function that assigns a random Id and adds a new todo
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000);
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };
  // returns a div with all our components inside
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
