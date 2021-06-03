import { useState } from 'react'
// We are adding the todos when the user inputs the data

const AddTodo = ({ onAdd }) => { 
    //array destructuring 
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        //prevents from submitting the form or cancels an event where the default action will not occur
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

    return (
        //form used to accept input from the user
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
