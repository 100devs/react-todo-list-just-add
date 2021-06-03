// This controls how each todo in the todos array in App.js will be printed to the DOM
const Todo = ({ todo }) => {
    return (
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}

export default Todo

