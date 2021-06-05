// we create a new Todo component which takes on parameter, we then grab the todo props from our App component
const Todo = ({ todo }) => {
    return (
        <div>
//         we render the todo item name into a h2
            <h2>{todo.item}</h2>
        </div>
    )
}

// exporting the function to use it eslewhere
export default Todo

