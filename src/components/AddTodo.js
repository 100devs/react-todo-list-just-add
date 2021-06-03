import { useState } from "react";
// creates our AddTodo component
const AddTodo = ({ onAdd }) => {
  const [item, setItem] = useState("");
  // function that adds the todo item on submit
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ item });

    setItem("");
  };
  // returns a form with the new todo thats been added
  // also the state is rerendered on change
  return (
    <form onSubmit={onSubmit}>
      <label>Add Todo:</label>
      <input
        type="text"
        placeholder="Todo Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default AddTodo;
