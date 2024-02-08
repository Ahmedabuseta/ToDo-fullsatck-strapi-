import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import ErrorMsg from "../errorMsg";
import AddPoints from "./AddPoints";
// import useGenerateRandomColor from "../ui/hooks/generateColor";
import { useDispatch, useSelector } from "react-redux";
import { addStickyWall, editStickyWall } from "../../app/features/stickywall";
import { IStickyWall } from "../../interface/interfaces";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
interface iProps {
  // preloadedData?: { title: string; color: string; points: string[] };
  setIsOpen: (isOpen: boolean) => void;
}
const StickWallForm = ({ setIsOpen }: iProps) => {

  function closeModal() {
    setIsOpen(false);
    navigate("/stickyWall")
  }
  const { stickID } = useParams();
  console.log(stickID );
  
  const defaultValues =  {
    title: "honda",
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    points: ["first point"],
  };
  const sticks = useSelector((state: RootState) => state.stickWalls);


  const navigate = useNavigate();

  const dispatch = useDispatch()
  const methods = useForm<IStickyWall>({
    defaultValues:defaultValues,
  });
  const { register, handleSubmit, formState: { errors } } = methods;
  useEffect(() => {
    if (stickID) {
      const stick = sticks.find((stick) => stick.id === Number(stickID));
      methods.reset(stick);
    } else {
      methods.reset({ ...defaultValues });
    }
    return () => {};
  }, [stickID]);
  const onSubmit: SubmitHandler<IStickyWall> = (data) =>{ 
    if(stickID){
      dispatch(editStickyWall({ ...data}));
    }else{
      dispatch(addStickyWall({ ...data, id: Date.now() }));
    }
    navigate("/stickyWall");  }
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
