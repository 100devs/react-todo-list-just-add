
const Todo = ({ todo }) => {  //define/create the Todo component, takes in a todo object
    return ( //returns a div to render
        <div>
            <h2>{todo.item}</h2> {/* renders the item property of todo in an h2*/}
        </div>
    )
}

export default Todo //export the Todo component

