import Todo from './Todo'

const List = ({ todos }) => {
  {/*  todos comes from state */ } 
  {/* destructuring, curly braces replace props.todo / props.title etc */ } 
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
    {/* // this maps each of element in todos array into their own Todo component */ }
}

export default List
