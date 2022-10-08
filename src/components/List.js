//import the Todo component
import Todo from './Todo'

//create a List component which returns a div to render, pass in todos
const List = ({ todos }) => {
  //sets up the return block, everythign in the block will be
  return (
    <div>
      {todos.map((todo) => //map through the todos so we display each one (create a list)
        <Todo key={todo.id} todo={todo} /> //display the Todo component with the unique key that we generated, and the todo in the array of todos
      )}
    </div>
  )
}

//export the List component
export default List