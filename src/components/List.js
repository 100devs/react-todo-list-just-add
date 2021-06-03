import Todo from './Todo'
// List component, taking in todos property 
//having some destructuring going on here, curly braces with the name is like we have passed in the props. Don't need to do props.todos or anything. We had 3 todos, and we're passing them in here. 
const List = ({ todos }) => {
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
            // passed in 3 todos, looping through these todos, and creating 3 todos 
          )}  
        </div>
    )
}

export default List

