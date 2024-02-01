import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import AddNewTodo from "../components/todo/addNewTodo";
import Todo from "../components/todo/todo";



const Todos = () => {
  const todos = useSelector((state: RootState)=>state.todos)

return(
<div className="flex-col w-full">
      
      {todos.map((todo)=>(
        <Todo
        todo={todo}
      />
      ))}
      </div>

)
}
export default Todos;