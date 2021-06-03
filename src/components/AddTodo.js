import { useState } from 'react'
//comment out after Thursday 
//This is handling adding our todos 
//This page is processing data from the user 

const AddTodo = ({ onAdd }) => { 
    //destructuring 
    const [item, setItem] = useState('')
    //destructuring stuff with useState Prop 

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

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
