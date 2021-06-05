
const Todo = ({ todo }) => { //creates a component by declaring a constant variable that contains a function that destructures the passed in prop grabing the passed in todo item/object
    return ( //returns the component we are defining inbetween the parenthesis
        <div> {/* place open div element tag*/}
            <h2>{todo.item}</h2> {/** place h2 element containing the list item passed to it */}
        </div> //{/** place closing div element tag */}
    )
}

export default Todo //exports the created component/app as the default item which means we can simply import it into to another file by just referencing the file.

