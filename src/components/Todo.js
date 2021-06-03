
const Todo = ({ todo }) => {

    //todo component with a div of h2 for each of them. 
    //adding item from our useState 
    //this is my individual todo component 
    //each todo having its own item 
    return (
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}

export default Todo

