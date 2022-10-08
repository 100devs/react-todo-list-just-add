//define/create the Todo component, takes in a todo object
const Todo = ({ todo }) => {
    return ( //returns a div to render
        <div>
            <h2>{todo.item}</h2> {/* renders the item property of todo in an h2*/}
        </div>
    )
}

//export the Todo component
export default Todo