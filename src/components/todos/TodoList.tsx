import { useSelector } from "react-redux";
import AddTodoBtn from "./addTodoBtn";
import { ITodo } from "../../interface/interfaces";
import SingleTodo from "./SingleTodo";
import { RootState } from "../../app/store";

interface iProps {
 
}

const TodoList = ({}:iProps) => {
  const todos = useSelector((state: RootState) => state.todos)
  console.log(todos);
  
return(
<div className="flex-col w-full">
    <AddTodoBtn title="Todo" />
    <div className="h-[84vh] overflow-auto">
       {todos.map((todo:ITodo)=>(
        <SingleTodo
        todo={todo}
      />
      ))}
    </div>
     
      </div>
)
}
export default TodoList;