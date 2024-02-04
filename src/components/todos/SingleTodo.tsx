import { CalendarX, ChevronRight } from "lucide-react";

import { Divider } from "antd";
import { ITodo } from "../../interface/interfaces";

interface IProps {
  todo : ITodo;
}

function SingleTodo({todo}:IProps) {
  const { id, title, list, subTasks, dueDate } = todo;
console.log(subTasks?.length);

  return (
    <div className="flex-col space-y-2 cursor-pointer text-[#3b3b3b]"
    key={id}>
    <div className="flex justify-between items-center p-2 pb-1">
      <div className="flex space-x-2 justify-start items-center">
      <input type="checkbox" />
      <h2>{title}</h2>
    </div>
    <ChevronRight />
    </div>
    <div className="flex justify-start items-center  gap-3 ms-3 flex-wrap">
    <div className="flex justify-start space-x-1 items-center">
        <CalendarX size={24} />
        <p>{dueDate}</p>
      </div>
      <div className="flex justify-start space-x-1 items-center">
        <div className={`w-5 h-5 rounded-md text-black bg-[#ebebeb] text-center items-center flex justify-center` }>{subTasks?.length || 0}</div>
        <p>Sub Tasks </p>
      </div>
      <div className="flex justify-start space-x-1 items-center">
        <div className={`${list?.color} w-5 h-5 rounded-md ` }></div>
        <p>{list?.type}</p>
      </div>
    </div>
    <Divider />
    </div>
  )
}

export default SingleTodo
