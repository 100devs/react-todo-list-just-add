//imports the Todo component from the todo file
import Todo from "./Todo";

//creates a new component called list that takes the props
const List = ({ todos }) => {
  //sets up the return block, everythign in the block will be
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
