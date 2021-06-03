// creates our Todo component and returns a div with a single todo inside
const Todo = ({ todo }) => {
  return (
    <div>
      <h2>{todo.item}</h2>
    </div>
  );
};

export default Todo;
