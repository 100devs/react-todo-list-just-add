import { useState } from "react";
// imports uses useState hook

const AddTodo = ({ onAdd }) => {
  // setting up our AddTodo component with onAdd (see App.js where it's returned)
  const [item, setItem] = useState("");
  //destructuring the array for the state

  const onSubmit = (e) => {
    // onSubmit (assume it's a button) with param "e", the event object
    /* w3schools: event handlers have access to the React event that triggered the function. In our example the event is the "click" event. Notice that once again the syntax is different when using arrow functions or not. With the arrow function you have to send the event argument manually:*/
    e.preventDefault();
    //Preventing the form submission allows your javascript code to handle the form data instead of sending the data elsewhere .
    onAdd({ item });
    // is returned in app.js, onAdd, addTodo
    setItem("");
    //per Mozilla: The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
  };

  return (
    //this is what the addTodo component returns
    <form onSubmit={onSubmit}>
      {/* form element calling onSubmit */}
      <label>Add Todo:</label>
      {/* inserts label element into browser */}
      <input
        type="text"
        // type attribute of the input that will be returned (text)
        placeholder="Todo Item"
        // placeholder attribute of the input that will be rendered/returned
        value={item}
        // value attribute of the input item that will be rendered/returned
        onChange={(e) => setItem(e.target.value)}
        // onChange (method when the input field is changed) with event object param which uses the setItem to change the value to the target value
      />
      <input type="submit" value="Add Todo" />
      {/* creates submit button with the value attribute of "Add Todo" (see const at the top of the page) */}
    </form>
    // indicates the end of the form
  );
};

export default AddTodo;
//exports the AddTodo component; thus, makes the AddTodo component available for importing
