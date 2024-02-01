import { Minus } from "lucide-react";
import { useFormContext } from "react-hook-form";
import ErrorMsg from "../errorMsg";

interface iProps {
  field: Record<"id", string>;
  index: number;
  remove: (idx: number) => void;
}
const AddPoint = ({ field, remove, index }: iProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col border-dashed border mb-3 rounded-md border-yellow-400 p-2 space-y-3 ">
      <div className="flex w-full gap-2  items-center justify-between">
        <input
        key={field.id}
          placeholder={`point ${index+ 1}`}
          {...register(`points.${index}`, { required: "required" })}
          className="rounded-md w-full p-2 focus:outline-yellow-500"
        />

        <div className="border-yellow-500 border hover:bg-yellow-500 group rounded-lg ">
          <Minus
            size={40}
            className=" cursor-pointer text-amber-400 group-hover:text-white"
            onClick={() => remove(index)}
          />
        </div>
      </div>
      {errors?.[`points`]?.[index] && errors && (
        <ErrorMsg msg={errors?.points?.[index]?.message} />
      )}
    </div>
  );
};
export default AddPoint;
