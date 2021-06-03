// imports userState hook - allows use of state without classes
import { useState } from 'react'
// import components into App.js for use
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

// function that will serve as the foundation of the DOM
function App() {
  // array destructuring that sets useState method
  const [todos, setTodos] = useState([
    { // prop: value
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

  // addTodo function that takes 'todo' argument
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)  // generates random id
    const newTodo = {id, ...todo} // creates new todo with our id and the todo argument passed
    setTodos([...todos, newTodo]) // call setTodos function, passing in all previous todos (spread operator), and adding the new todo
  }

  // this is what App.js returns when plugged into the index.js
  // creates a div with class="container"
  // plugs in the Header component and sets the title prop to "Todo list"
  // plugs in the AddTodo component and passes in the addTodo function to be run "onAdd"
  // plugs in the List component and passes in the todos object into the todos prop
  return (
    <div className="container"> 
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}
// allows outside files to see/use App function
export default App;
