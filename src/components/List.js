// imports todo from file todo
import Todo from './Todo'

// todos is the passed in props
const List = ({ todos }) => {
  // renders information by populating a new array in the todo items
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

