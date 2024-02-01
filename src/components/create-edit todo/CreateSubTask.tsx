import Todos from "../../pages/todos";
import AddNewTodo from "../todo/addNewTodo";

interface iProps {
 
}

const CreateSubTask = ({}:iProps) => {

return(
<div>
<AddNewTodo  title="Subtask"/>
<Todos />

</div>
)
}
export default CreateSubTask;