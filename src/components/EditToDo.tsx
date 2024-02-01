import { X } from "lucide-react";
import SelectList from "./ui/ListBox";
import AddTagBtn from "./ui/AddTagBtn";
import CreateSubTask from "./create-edit todo/CreateSubTask";
import CreateTask from "./create-edit todo/CraeteTask";

interface iProps {}

const EditToDo = ({}: iProps) => {
  return (
    <div className="rounded-xl p-4 bg-[#ebebeb] w-full text-[#3b3b3b] flex h-screen flex-col justify-between ">
      <div className="flex-col space-y-4">
        <div className="flex justify-between text-xl items-center">
          <h2 className="font-semibold ">task :</h2>
          <X size={32} />
        </div>
        <CreateTask/>
        <div className="flex items-center gap-5 my-2">
          <p>Date </p>
          <input type="date" className="w-ful  p-2 rounded-lg " />
        </div>
        <div className="flex items-center gap-5 my-2">
          <p>List </p>
          <SelectList />
        </div>
        <div className="flex items-center gap-5 my-2">
          <p>Tags</p>
          <div className="flex gap-3 flex-wrap">
            <AddTagBtn className="bg-white" />
          </div>
        </div>
        <div className="text-2xl font-semibold
        ">
          Sub Tasks :
        </div>
        <CreateSubTask/>
      </div>
      <div className="flex items-center gap-3 my-4 bg-[#ebebeb]  ">
        <button className="w-full  p-2 rounded-lg bg-white mt-2">Cancel</button>
        <button className="w-full bg-yellow-400 p-2 rounded-lg mt-2">
          Add
        </button>
      </div>
    </div>
  );
};
export default EditToDo;
