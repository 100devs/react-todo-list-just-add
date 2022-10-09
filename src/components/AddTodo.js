//importing useState to track some state variable
import { useState } from 'react'

//creating Addtodo component which takes one param, we are directly accessing the onAdd event from the top level as param
const AddTodo = ({ onAdd }) => {
    //create two state variables using destructuring for useState hook 
    const [item, setItem] = useState('')
    //Create handler function for our onSubmit event in the form element
    const onSubmit = (e) => {
        //prevents the default refresh 
        e.preventDefault()
        //calling our onAdd handler function and passing our item as an object
        onAdd({ item })
        //resetting our item state back to empty
        setItem('')
    }

    return ( //the UI part of AddTodo
        //adding onSubmit event
        <form onSubmit={onSubmit}> {/* calls onSubmit from line 10 when form is submitted */}
            <label>Add Todo:</label> {/* Add Todo: label */}
            <input /* the text input field */
                type="text"
                placeholder="Todo Item"
                value={item} //the value from line 7
                onChange={(e) => setItem(e.target.value)} //onChange of input field, item is set to whatever is in the fields
            />
            <input type="submit" value="Add Todo" /> {/* the form's submit button */}
        </form>
    )
}

//export the component
export default AddTodo