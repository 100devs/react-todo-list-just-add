//function to render the Todo component div, passed todo as a prop
const Todo = ({ todo }) => {
    return (
        <div>
        //using the prop property to set the text of the h2
            <h2>{todo.item}</h2>
        </div>
    )
}
// ennable the use of the todo component in other files
export default Todo

