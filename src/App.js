//importing useState so we can preserve some variable in a function component somewhere
import { useState } from 'react'
//import Header component
import Header from "./components/Header"
//import List component
import List from "./components/List"
//import AddTodo component
import AddTodo from "./components/AddTodo"

//create the main App component that will be loaded into the element with root id in the DO
function App() {

  //setting up todos to use State - the array of todos is the initial value used by useState, and setTodos is the function that updates todos
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

  //create an addTodo function
  const addTodo = (todo) => {
    //create an id out of a random Number up to 100,000
    const id = Math.ceil(Math.random() * 100000)
    //create a newTodo which has the id and whatever was passed in as todo
    const newTodo = { id, ...todo }
    //this is the setTodo function which we use on line 8 - it returns an array containing all the todos plus the new one
    setTodos([...todos, newTodo])
  }

  //this is the return for the App component. It returns a container div with Header, AddTodo, and List components
  return (
    <div className="container">
      <Header title="Todo List" /> {/*Header Component with title prop */}
      <AddTodo onAdd={addTodo} /> {/* AddTodo Component with onAdd prop which is the func on line 23*/}
      <List todos={todos} /> {/*List Component with todos prop which is our State variable from line 8 */}
    </div>
  );
}

//export App to use in our app
export default App;