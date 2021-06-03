import { useState } from 'react' //importing useState to track some state variable

const AddTodo = ({ onAdd }) => {    //create the AddTodo component, takes in onAdd
    const [item, setItem] = useState('') //array destructuring to define our state - initial value of item is '', setItem updates item

    const onSubmit = (e) => { //onSubmit event listener
        e.preventDefault() //prevents the page from reloading
        onAdd({item})  //the item in the field is passed to onAdd

        setItem('') //shows empty item on Submit
    }

    return ( //the UI part of AddTodo
        <form onSubmit={onSubmit}>    {/* calls onSubmit from line 6 when form is submitted */}
            <label>Add Todo:</label> {/* Add Todo: label */ }
            <input     {/* the text input field */}
                type="text" 
                placeholder="Todo Item"
    value={item}     //the value from line 4
                onChange={ (e) => setItem(e.target.value)} //onChange of input field, item is set to whatever is in the field
            /> 
            <input type="submit" value="Add Todo" /> {/* the form's submit button */}
        </form>
    )
}

export default AddTodo //export the component
