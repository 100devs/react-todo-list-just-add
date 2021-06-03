import Todo from './Todo' // import the Todo component
// List function takes in todos array as argument and prints them to the DOM - using .map to loop through
const List = ({ todos }) => {
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

