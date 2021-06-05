// importing usestate hook from react
import { useState } from 'react'
// importing all the child components from the components folder
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

// creating a function App component
function App() {

//  we use destructuring to add variables and reference them to usestate hook, with this 
//   todos hold the currentState of the app and setTodos helps us change it
//  we then add an array of objects that has all the hardcoded todoitems to display on the list
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

//   this is a handler function that is associated to the onAdd event handler
  const addTodo = (todo) => {
//    the id variable hold the value of random rumbers between 0 to 100000
    const id = Math.ceil(Math.random()*100000)
//    we then associate the id and the todo array to our newTodo variable
    const newTodo = {id, ...todo}
//   we then pass both our old and new todos into the state
    setTodos([...todos, newTodo])
  }

//   we are returing a div, with all the child components
//   AddTodo gets the props on onAdd event with a handler function associated to it
//   list gets the props of our todos array
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
