import { useState } from 'react' // allows use of State without Class-based components
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

function App() {
  // controlling the root of the whole app 
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
{/* ^^ global state, the base level for the initial state
// useState is a React hook (uses array desstructuring)
// todos is state, setTodos changes state */}
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    {/* const newTodo allows randomly generated id and pairs item(new todo). Uses spread opperator to put new todo at and of array(?) (spread opperator may not be necessary do to creating ONE todo at a time) */}
    const newTodo = {id, ...todo}
    {/* adds new todo in array of todos list */}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header title="Todo List" />
       {/* header component to render out the header */}
      <AddTodo onAdd={addTodo} />
      {/* AddTodo component allows us to add new todos */}
      <List todos={todos}/>
      {/* list component for rendering the List */}
      {/* passing todos into the list component */}
    </div>
  );
}

export default App; {/* allows other files to see our App function */}


