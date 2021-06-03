// creating a Todo funciton component that is receing "todo object" as props from the top level (APP)
const Todo = ({ todo }) => {
    return (
        <div>
        {/* receiving todo items from the todo object in props */}
            <h2>{todo.item}</h2>
        </div>
    )
}

export default Todo

