import { useFormContext, useFieldArray } from "react-hook-form";
import { ITodo } from "../../interface/interfaces";
import { X } from "lucide-react";
import ErrorMsg from "../errorMsg";
import { useState } from "react";

const CreateSubTask = () => {
  const { control } = useFormContext<ITodo>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subTasks",
  });
  const [err,setErr] = useState<boolean>(false)

  const handleSubTaskRemove = (indexToRemove: number) => {
    remove(indexToRemove);
  };
  return (
    <div className="flex flex-col  justify-start space-y-3">
      <input
        type="text"
        className="rounded-md p-2"
        placeholder="Type and press Enter to add tags"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault(); 
            if(e.currentTarget.value === ''){
              setErr(true)
            }else{
              setErr(false)
              append({ id: Date.now().toString(), title: e.currentTarget.value });
            e.currentTarget.value = '';
            }
            
          }
        }}
      /> 
      {err? <ErrorMsg  msg='pleasefill a task to add it '/> : ''}
      <div className="flex flex-col max-h-56  overflow-y-auto gap-3 justify-start flex-warp">
        {fields.map((sub, index) => (
          <div
            key={sub.id}
            className="flex  justify-between text-[#3e3e3e] rounded-md px-2 border bg-sky-200 p-1  items-center gap-2"
          >
            <div className="flex space-x-2 justify-start items-center">
              <h2>{sub.title}</h2>
            </div>
            <button
              type="button"
              className=""
              onClick={() => handleSubTaskRemove(index)}
            >
              <X color="#ff0000" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CreateSubTask;
