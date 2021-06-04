
const Todo = ({ todo }) => {
    return (
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}
{/* this makes todo components and tells App.js what to render when a todo is created*/}

export default Todo

