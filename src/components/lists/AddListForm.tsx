import {  useState } from "react";
import Modal from "../ui/modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { IList } from "../../interface/interfaces";
import { Plus } from "lucide-react";
import ErrorMsg from "../errorMsg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addList, editList } from "../../app/features/listSlice";

interface iProps {
  id?: number;
}

const AddListForm = ({ id }: iProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IList>();
  const handleEdit = () => {
    const lists = useSelector((state: RootState) => state.lists);
    const foundedList = lists.find((list) => list.id === id);
    reset({ type: foundedList?.type, color: foundedList?.color });
  };
  id !== null ? handleEdit : reset({});

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<IList> = (data) => {
    console.log(data);dispatch(addList({ ...data, id: Date.now() }));
    if (id) {
      
      
    } else {
      dispatch(editList({ ...data, id }));
    }
    setIsOpen(false);
  };
  return (
    <>
      <Modal title="Add List" isOpen={isOpen} setIsOpen={setIsOpen}>
        <form
          className="flex space-y-4 gap-3 mt-3 flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" space-x-3 items-center flex">
            
              <input
                type="text"
                placeholder="List Title"
                className="w-full rounded-md p-2"
                {...register("type", { required: "title is reqiured" })}
              />
              

            <input
              type="color"
              className=""
              {...register("color", { required: "color is req" })}
            />
          </div>
          {errors?.type && <ErrorMsg msg={errors?.type?.message} />}
          <div className="w-full flex text-white  space-x-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-md py-2 bg-[#ababab] hover:bg-[#8b8b8b]"
            >
              cancel
            </button>
            <button
              type="submit"
              className="w-full rounded-md py-2 bg-yellow-400 hover:bg-yellow-500"
            >
              Add
            </button>
          </div>
        </form>
      </Modal>
      <button
        onClick={() => setIsOpen(true)}
        className="flex gap-1 w-full justify-start items-center"
      >
        <Plus size={38} absoluteStrokeWidth />
        <span className="capitalize md:hidden flex lg:flex ">Add New List</span>
      </button>
    </>
  );
};
export default AddListForm;
