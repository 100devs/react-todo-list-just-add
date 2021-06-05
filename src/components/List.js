import Todo from './Todo' //import the Todo component 

const List = ({ todos }) => { //create a constant variable that holds a function that pulls the todos object from the received props object
    return ( //return the app structure we created with the components we imported
        <div> {/** open a div */}
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  {/* anonymous function that maps the todo list going through each item and creating a Todo component passing it the id and item  */}
        </div> //closes div
    )
}

export default List //exports the created component/app as the default item which means we can simply import it into to another file by just referencing the file.

