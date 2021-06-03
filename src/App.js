//imports useState hook
import { useState } from 'react'

//imports components
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"


//creating your App function
function App() {

  //sets useState
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

  //creates addTodo function
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo} //creates new todo
    setTodos([...todos, newTodo]) //calls setTodos to add newTodo along with pervious todos
  }
 //what App.js returns
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

// exporting App.js
export default App;
