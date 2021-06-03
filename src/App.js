import { useState } from 'react' 
//pulling in useState hook from React 
import Header from "./components/Header";
//pulling in Header component 
import List from "./components/List"
//pulling in List component
import AddTodo from "./components/AddTodo"
//pulling in AddTodo component 
//All above components are going to go inside the App below 

function App() {
//App is what's going to be rendered out into the browser
//below we are using global state  
//useState react hook and array destructuring. 
//todos is our actual state, and setTodos is what is allowing us to modify the use state 
//whatever is inside the State is how the state starts off. This is our initial state. Passin our todos into our LIST component 
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
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      {/* title in Header component is going to be my prop */}
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  ); //these were all imported from code on top of the page, header, addTodo, List etc. 
  //List component is the parent component and inside that list component is going to be the todos components (child component)
  //no longer need closing tag with newer React like in class components 
  //can easily reuse these components 
}

export default App;
