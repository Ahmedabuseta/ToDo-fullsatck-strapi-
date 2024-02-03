import AddNewTodo from "../components/todo/addNewTodo";
import Todos from "./todos";

interface iProps {
 
}

const Upcoming = ({}:iProps) => {

return(
<div>
<AddNewTodo title='Task' />
<Todos/>
</div>
)
}
export default Upcoming;