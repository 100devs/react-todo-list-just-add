import Todo from "./Todo"; //brings in Todo components

// creates our List component with a todos prop and returns a div with each Todo component
const List = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
