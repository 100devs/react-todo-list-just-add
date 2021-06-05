// importing Todo component
import Todo from './Todo'

// creating a list component which takes one parameter, which is our todos array that is being passed from App comp
const List = ({ todos }) => {
    return (
        <div>
//        we map through our todos array and render a Todo component for each todo item
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

