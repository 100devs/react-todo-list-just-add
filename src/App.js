// importing useState from React
import { useState } from 'react'
// importing Header, list and AddTodo components 
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

// creating a function component
function App() {

  // destructing varibles to set and change the state which has an array of todo item objects
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

  // creating a new todo handler function to change the current state using setTodos
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }
// the App component returns a div element with a Header, AddTodo and List components
  return (
    <div className="container">
    {/* header component with props */}
      <Header title="Todo List" />
      {/* AddTodo component with an onAdd event prop and addTodo handler function being passed to the child component*/}
      <AddTodo onAdd={addTodo} />
      {/* List component with useState todos props being passed to the child component */}
      <List todos={todos}/>
    </div>
  );
}

export default App;
