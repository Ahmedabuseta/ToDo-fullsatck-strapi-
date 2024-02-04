import TodoList from "../components/todos/TodoList";
import { Outlet } from "react-router-dom";

interface iProps {
 
}

const TodoLayout = ({}:iProps) => {

return(
<div className="flex justify-between  w-full flex-grow-1 p-4 items-start gap-4">
  <div className="flex-grow-1 max-h-screen overflow-auto w-full">
  <TodoList />
  </div>
  <div className="flex-grow-1  max-w-2xl">
    <Outlet />
    {/* <CreateTodo /> */}
  </div>
</div>
)
}
export default TodoLayout;