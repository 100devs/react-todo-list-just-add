// importing useState hook and React
import { useState } from 'react'

// Creating AddTodo function component, its receiving onADD props from the top level 
const AddTodo = ({ onAdd }) => { 
    // Setting new state to for items and destructuring it into variables
    const [item, setItem] = useState('')

    // creating an onSubmit handler function
    const onSubmit = (e) => {
        // preventDefault stops/cancels the default action, meaning a specific event will not occur
        e.preventDefault()
        // the onAdd event handler function adds the new item 
        onAdd({item})
        // we changing the state of the item back to empty
        setItem('')
    }
// the component returns a form element with an input an submit button
    return (
        // setting onSubmit event to onSubmit event handler as action
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                //adding the item as the input value to store new items being added into the items array
                value={item}
                // onChange event that sets the items value to the current value
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
