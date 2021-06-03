import Todo from './Todo'  //import the Todo component

const List = ({ todos }) => { //create a List component wheich returns a div to render, pass in todos
    return (
        <div>
          {todos.map((todo) => //map through the todos so we display each one (create a list)
            <Todo key={todo.id} todo={todo} /> //display the Todo component with the unique key that we generated, and the todo in the array of todos
          )}  
        </div>
    )
}

export default List //export the List component

