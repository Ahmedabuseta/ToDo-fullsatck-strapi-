import { CalendarX, ChevronRight } from "lucide-react";

import { Divider } from "antd";
import { ITodo } from "../../interface/interfaces";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { editTodo } from "../../app/features/todoslice";

interface IProps {
  todo: ITodo;
}

function SingleTodo({ todo }: IProps) {
  const { id, title, list, subTasks, dueDate } = todo;
  console.log(subTasks?.length);
  const todos = useSelector((state: RootState) => state.todos);
  const thisTodo = todos.find((todo) => todo.id === id);
  const isChecked = thisTodo?.isCompleted;
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(
      editTodo({
        ...thisTodo,
        isCompleted: !thisTodo?.isCompleted,
        id: thisTodo?.id,
      } as ITodo)
    );
  };
  return (
    <div className="flex-col space-y-2  text-[#3b3b3b]" key={id}>
      <div className="flex justify-between items-center p-2 pb-1">
        <div >
          <div className="flex space-x-2 justify-start items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="cursor-pointer"
            /><h2>{title}</h2>
          </div>
          
          <div className="flex space-x-4">
            {subTasks?.map((subTask) => (
              <p className="flex space-x-1">-{subTask.title}.</p>
            ))}
          </div>
        </div>
        <Link to={`edit/${id}`}>
          <ChevronRight className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex justify-start items-center  gap-3 ms-3 flex-wrap">
        <div className="flex justify-start space-x-1 items-center">
          <CalendarX size={24} />
          <p>{dueDate}</p>
        </div>
        <div className="flex justify-start space-x-1 items-center">
          <div
            className={`w-5 h-5 rounded-md text-black bg-[#ebebeb] text-center items-center flex justify-center`}
          >
            {subTasks?.length || 0}
          </div>
          <p>Sub Tasks </p>
        </div>
        <div className="flex justify-start space-x-1 items-center">
          <div className={`${list?.color} w-5 h-5 rounded-md `}></div>
          <p>{list?.type}</p>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default SingleTodo;
