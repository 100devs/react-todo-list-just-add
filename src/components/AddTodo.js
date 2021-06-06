import { useState } from 'react' //pulling useState from the react library so we can use it directly

const AddTodo = ({ onAdd }) => { //create the AddTodo component and pass in the onAdd function from the prop by destructing
    const [item, setItem] = useState('') //declaring the item variable and setItem setting them to the useState and setting items default to an empty string

    const onSubmit = (e) => { //a function literal that takes in the event response
        e.preventDefault() // prevents/stops the default behaviours of the event
        onAdd({item}) //invoking the onAdd function and passing it the current item which will add it to our todo list since it is the addTodo function declared in the app.js file

        setItem('') //resets the item variable to an empty string so it is ready to recieve a new item.
    }

    return ( //return the component structure we created
        <form onSubmit={onSubmit}> {/**inserts a form and passes our onSubmit function to it */}
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}  //{/** pass the item variable value from the useState */}
                onChange={ (e) => setItem(e.target.value)} //creates an anonymous function the receives the event response and uses setItem to update item to the value written given to it by the event response.
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo //exports the created component/app as the default item which means we can simply import it into to another file by just referencing the file.
