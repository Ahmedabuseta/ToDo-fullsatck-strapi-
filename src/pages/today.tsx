import AddNewTodo from "../components/todo/addNewTodo";
import Todos from "./todos";

const Today = () => {

return(
<div>
<AddNewTodo title='Task' />
<Todos/>
</div>
)
}
export default Today;