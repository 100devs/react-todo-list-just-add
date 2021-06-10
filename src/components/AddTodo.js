//calls the API from react to allow us to use state
import { useState } from 'react'


// 'onAdd' is another way of saying props and cleaner way to code
const AddTodo = ({ onAdd }) => { 
    // array destructing.
    const [item, setItem] = useState('')

    // event listener when click, add item
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})
        // usestate 
        setItem('')
    }

    // renders the information from above and user input
    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
