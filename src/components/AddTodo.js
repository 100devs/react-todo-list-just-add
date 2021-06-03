// imports useState to be used in this file
import { useState } from 'react'

// declares AddToDo and passes in onAdd as props 
const AddTodo = ({ onAdd }) => { 
    //sets up useState with state of item and a setItem method
    const [item, setItem] = useState('')

    //creates a function to handle the submission of the form, prevents default behaviour, passes the item state to onAdd function then sets item state to '' 
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }
 //renders the form component
    return (
        // passes in onSubmit function
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                //sets value of input to the state so its visible while typing due to onchange fn
                value={item}
// changes the state to match the input value at each change
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}
//makes component available to use in the react app
export default AddTodo
