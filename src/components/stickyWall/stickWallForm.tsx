import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ErrorMsg from "../errorMsg";
import AddPoints from "./AddPoints";
import useGenerateRandomColor from "../ui/hooks/generateColor";
import { useDispatch } from "react-redux";
import { addStickyWall } from "../../app/features/stickywall";
import { IStickyWall } from "../../interface/interfaces";
interface iProps {
  // preloadedData?: { title: string; color: string; points: string[] };
  setIsOpen: (isOpen: boolean) => void;
}
const StickWallForm = ({ setIsOpen }: iProps) => {
  function closeModal() {
    setIsOpen(false);
  }

  const color = useGenerateRandomColor();
  console.log(color);
  const dispatch = useDispatch()
  const methods = useForm<IStickyWall>({
    defaultValues: {
      title: "honda",
      color: color,
      points: ["first point"],
    },
  });
  const { register, handleSubmit, formState: { errors } } = methods;
  
  const onSubmit: SubmitHandler<IStickyWall> = (data) =>{ 
    dispatch(addStickyWall({...data , id:Date.now() }))
    // console.log(data)
  }
  console.log(errors);

  return (
    <FormProvider {...methods} >
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex space-x-3  p-2 items-center justify-between">
        <div className="w-full ">
          <input
            type="text"
            placeholder="write your stick  wall title here..."
            className="rounded-md p-2 w-full focus:outline-yellow-500"
            {...register("title", { required: "required" })}
          />
          {errors?.["title"] && <ErrorMsg msg={errors?.["title"]?.message} />}
        </div>
        <input
          type="color"
          {...register("color")}
          className="p-0 w-15 h-11"
        />
        {errors?.["color"] && <ErrorMsg msg={errors?.["color"]?.message} />}
      </div>
      <div className="flex  p-2 items-center justify-center"></div>
      <AddPoints />
      {/* buttons {cancel, add} */}
      <div className="mt-4 flex space-x-3 ">
        <button
        type="button"
          className=" w-full rounded-md  bg-[#ababab]  py-2   text-white font-bold hover:bg-[#8b8b8b] "
          onClick={closeModal}
        >
          cancel
        </button>
        <button
          type="submit"
          className=" rounded-md w-full  bg-yellow-500  py-2  text-white font-bold hover:bg-yellow-600 "
          // onClick={closeModal}
        >
          Add
        </button>
      </div>
    </form>
    </FormProvider>
  );
};
export default StickWallForm;
