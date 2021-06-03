import { useState } from 'react' //importing useState so we can preserve some variable in a function component somewhere
import Header from "./components/Header"; //import Header component
import List from "./components/List" //import List component
import AddTodo from "./components/AddTodo" //import AddTodo component

function App() { //create the main App component that will be loaded into the element with root id in the DOM

  const [todos, setTodos] = useState([  //setting up todos to use State - the array of todos is the initial value used by useState, and setTodos is the function that updates todos
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

  const addTodo = (todo) => { //create an addTodo function
    const id = Math.ceil(Math.random()*100000) //create an id out of a random Number up to 100,000
    const newTodo = {id, ...todo} //create a newTodo which has the id and whatever was passed in as todo
    setTodos([...todos, newTodo]) //this is the setTodo function which we use on line 8 - it returns an array containing all the todos plus the new one
  }

  return ( //this is the return for the App component. It returns a container div with Header, AddTodo, and List components
    <div className="container">
      <Header title="Todo List" /> {/*Header Component with title prop */}
      <AddTodo onAdd={addTodo} /> {/* AddTodo Component with onAdd prop which is the func on line 23*/}
      <List todos={todos} /> {/*List Component with todos prop which is our State variable from line 8 */}
    </div>
  );
}

export default App; //export App to use in our app
