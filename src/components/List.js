import Todo from './Todo' //import Todo component

const List = ({ todos }) => { //List component with todos parameter
    return (
        <div>
          {todos.map((todo) => //display each todo
            <Todo key={todo.id} todo={todo} /> //Todo component will have id and array of todos
          )}  
        </div>
    )
}

export default List //export List component

