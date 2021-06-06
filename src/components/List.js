import Todo from './Todo' //import the Todo component 

const List = ({ todos }) => { //create a List component that pulls the todos object from the received props object
    return ( //return the app structure we created with the components we imported
        <div> {/** open a div */}
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  {/* It uses map on the todos list passed to it, going through each item and creating a Todo component and passes the id and item to it */}
        </div> //closes div
    )
}

export default List //exports the created component/app as the default item which means we can simply import it into to another file by just referencing the file.

