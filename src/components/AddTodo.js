import { useState } from 'react'



{/*takes in form input */}
const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')


{/* our event listener*/}
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }


{/*setting up our user input to be sent to app.js line 37 in order to create a new todo item */}
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
{/*exports to app.js */}
export default AddTodo
