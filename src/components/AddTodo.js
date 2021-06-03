import { useState } from 'react'

//creation of AddToDo component, passing in onAdd
const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')

    //eventhandler
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

    //the form to add todo
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

//exporting of AddTodo
export default AddTodo
