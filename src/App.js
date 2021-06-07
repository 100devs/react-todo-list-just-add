import { useState } from 'react' //import useState object from react
import Header from "./components/Header"; //import Header component
import List from "./components/List" //import List component
import AddTodo from "./components/AddTodo" //import AddToDo Component

function App() { //App component that will render in 'root' element in DOM

  const [todos, setTodos] = useState([ //the todos array is the original value used in useState, setTodos function will update the array
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

  const addTodo = (todo) => { //create addTodo function
    const id = Math.ceil(Math.random()*100000) //create a random number ID
    const newTodo = {id, ...todo} // create newTodo with id and passed in todo parameter
    setTodos([...todos, newTodo]) // function that will return a new array with original content plus added 
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} /> 
        //^ AddTodo component with property of above function
      <List todos={todos}/>
         //^ List todos component  with property of above original state
    </div>
  );
}

export default App; //export App
