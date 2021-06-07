import { useState } from 'react' // import useState object of react

const AddTodo = ({ onAdd }) => {  //AddTodo component with onAdd parameter
    const [item, setItem] = useState('') //array destructuring. item currently set to ''. setItem to update item

    const onSubmit = (e) => { //onSubmit event listener
        e.preventDefault() //stops page from reloading
        onAdd({item}) //item parameter into onAdd

        setItem('') //'' on submit
    }

    return (
        <form onSubmit={onSubmit}>
        //^ call onSubmit when submitted
            <label>Add Todo:</label>
            <input 
            //^ text field
                type="text" 
                placeholder="Todo Item"
                value={item} //from line 4
                onChange={ (e) => setItem(e.target.value)} //setItem to input value
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo //export AddTodo component
