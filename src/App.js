

//import the useState from React
import { useState } from 'react'  
//import Header component
import Header from "./components/Header";
//import List component
import List from "./components/List"
//import AddTodo component
import AddTodo from "./components/AddTodo"


//App is main component in react which acts as acontainer for all other compnenents. App willbe loaded into an html element
//rendered in the browser
function App() {
  //array destructing and we are using the useState() hook
// returning the value of the useState() hook to get a variable that contains the state array and a mthod for updating the state. You can’t update the array directly without using the method returned from usesState() which is the setTodos
//todos is our actual state and setTodos allows us to modify the useState. The initial state is what the state
  //starts with . This passes into the List component.
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

  const addTodo = (todo) => {
    //finding random number
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    //the destructuring extracts the id name  and todo has the remaining properties
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header title="Todo List" /> //Header Component which has the prop 
      <AddTodo onAdd={addTodo} /> //addtodo Component which has the prop
      <List todos={todos}/>  //List Component has the todos component i.e, they are parent and child 
        //components respectively
    </div>
  );
}

export default App;
