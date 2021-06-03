//importing Todo component
import Todo from './Todo'

//creation of List component, passing in todos
const List = ({ todos }) => {
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

//exporting List component
export default List

