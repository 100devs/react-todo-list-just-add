// allows us to use state from reach as stated.
import { useState } from 'react'
// allows you to use header components
import Header from "./components/Header";
// allows you to use list componenets
import List from "./components/List"
// allows you to use addtodo components
import AddTodo from "./components/AddTodo"

function App() {
//array destructing and allows you to use useState
  const [todos, setTodos] = useState([
    // id's are needed in this case to identify. 
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

  // this reads the todo file to pass in props
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    // spread operator to grab all the items in the array.
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  //renders everything from all componenets to be displayed on main page.
  return (
    <div className="container">
      <Header title="DENNIS' TO DO LIST" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
