import { useState } from 'react' //pulling useState from the react library so we can use it directly
import Header from "./components/Header"; //importing the file that defines the header
import List from "./components/List" //importing the file that defines the List component
import AddTodo from "./components/AddTodo" //importing the file that defines the AddTodo component

function App() {

  const [todos, setTodos] = useState([ //??????useState for using hooks, we are pulling the todos property and the setTodo function to use with our componet and passing an initial value object
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

  const addTodo = (todo) => { //defines a function that can be used by a component
    const id = Math.ceil(Math.random()*100000) //uses the random number math object to creates unique id for the key
    const newTodo = {id, ...todo} //creates a new todo item/object with the todo item that is passed in. It places the generated id and then spreads out the value passed to it
    setTodos([...todos, newTodo]) //since this overwrites the previous value, they recreate the todo object by spreading out the old values and insertin the new item after
  }

  return ( //return the app structure we created by using the components we imported
    <div className="container"> {/* creates an opening div with a class of container */}
      <Header title="Todo List" /> {/* inserts a Header component and passes the value 'Todo List' as the value for the title prop */}
      <AddTodo onAdd={addTodo} /> {/* inserts an AddTodo component and passes the addTodo function to the onAdd prop */}
      <List todos={todos}/>  {/* inserts a List component and passed the todos object (which contains our current todo list) to the todos prop */}
    </div> //{/* creates a closing div with a class of container */}
  );
}

export default App; //exports the created component/app as the default item which means we can simply import it into to another file by just referencing the file.
