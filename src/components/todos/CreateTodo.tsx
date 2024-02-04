import { X } from "lucide-react";
import CreateTask from "./CraeteTask";
import SelectList from "../ui/ListBox";
import CreateSubTask from "./CreateSubTask";
// import AddTagBtn from "../ui/AddTagBtn";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ITodo } from "../../interface/interfaces";
import TagInput from "./InputTags";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/features/todoslice";
import ErrorMsg from "../errorMsg";

interface iProps {
  id?: number | unknown;
}

const CreateTodo = ({}: iProps) => {
  const methods = useForm<ITodo>(
    {defaultValues:{
      title:'',
      description:'',
      dueDate:'',
      list:{
        id:1,
        color:"bg-red-500",
        type:"list",
      },
      subTasks:[],
      tags:[],
      isCompleted:false
      
    }}
  );
  const dispatch =useDispatch()
  // const { formState: { errors } } = methods;
     const onSubmit: SubmitHandler<ITodo> = (data) => {console.log(data,methods.formState.errors)
  dispatch(addTodo({...data,id:Date.now(),isCompleted:false}))
  }
  console.log();
  
  return (
    <div className="rounded-xl p-4 bg-[#ebebeb] w-full text-[#3b3b3b] flex  flex-col justify-between ">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex-col min-h-[84vh] space-y-4">
            <div className="flex justify-between text-xl items-center">
              <h2 className="font-semibold ">task :</h2>
              <X size={32} className="cursor-pointer" />
            </div>

            <CreateTask />
            <div className="flex items-center gap-5 my-2">
              <p>Date </p>
              <input
                type="date"
                className="w-full  p-2 rounded-lg "
                {...methods.register("dueDate",{required:'Date is required'})}
              />
              {methods.formState.errors?.dueDate &&<ErrorMsg msg={methods.formState.errors?.dueDate?.message} />}
            </div>
            <div className="flex items-center gap-5 my-2">
              <p>List </p>
              <SelectList />
            </div>
            <div className="flex items-center gap-5 my-2">
              <p>Tags</p>
              <div className="flex gap-3 flex-wrap">
                <TagInput />
              </div>
            </div>
            <div className="text-2xl font-semibold">Sub Tasks :</div>
            <CreateSubTask />
          </div>
          <div className="flex items-center gap-3 my-4 bg-[#ebebeb]  ">
            <button className="w-full  p-2 rounded-lg bg-white mt-2">
              Cancel
            </button>
            <button
              className="w-full bg-yellow-400 p-2 rounded-lg mt-2"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default CreateTodo;
