// we import the todo component to add to the list component
import Todo from './Todo'

// create LIst function component that takes in an object "todos" as props
const List = ({ todos }) => {
    return (
        <div>
        {/* we map through the todos to create new todo items and add the to our Todo component */}
          {todos.map((todo) => 
          {/* we grab the todo item id's and pass it as key for each todo item and the todo item itself, which gets rendered on the webpage */}
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

