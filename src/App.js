// imports useState functionality, Header,AddToDo and List components
import { useState } from 'react'
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

//main app function to generate the components which are rendered in the root div in the index.html file
function App() {
// setting the initial state of the toDos to the array of todo objects
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
//when a new to do is made an id is generated for the id, this is then passed into the set state which updates the setstate array to add the new todo to the existing ones
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }
//genereates the html thats rendered into the html by using the components imported at the top of the page to dynamically generate the html required based on the todos we have
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}
// maves the App function available throughout the app througgh the use of import in other files
export default App;
