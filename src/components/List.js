// imports todo component
import Todo from './Todo'

//create fn to render the list div component and passes todos in as props
const List = ({ todos }) => {
    return (
        <div>
        //using jsx to map through the todos to render a todo component for each todo in the todos arr of obj passed in
          {todos.map((todo) => 
            //key is set as todo id and the todo prop is set to the todo
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}
//maked the list component available for use elsewhere
export default List

