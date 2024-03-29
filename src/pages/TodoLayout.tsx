import TodoList from "../components/todos/TodoList";
import { Outlet, useLocation } from "react-router-dom";
import PageTitle from "../components/ui/PageTitle";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface iProps {}

const TodoLayout = ({}: iProps) => {
  const todos = useSelector((state: RootState) => state.todos);
  const  { pathname } = useLocation()
  
  return (
    <div className="flex justify-between   w-full p-4 items-start gap-4">
      <div className="flex flex-col flex-grow w-full gap-3">
        <div className="flex justify-between w-full flex-grow  lg:justify-start lg:gap-8 items-center" >
          <PageTitle title="Today" />
          <span className="w-11 h-11 bg-slate-300 text-white rounded-md flex items-center p-2 justify-center text-2xl ">
            {todos.length}
          </span>
        </div>
        <div className=" max-h-screen w-full">
          <TodoList />
        </div>
      </div>
      <div className={` absolute ${ pathname === "/today" ? "" : " inset-0"} lg:relative  lg:max-w-3xl`}>
        <Outlet />
      </div>
    </div>
  );
};
export default TodoLayout;
