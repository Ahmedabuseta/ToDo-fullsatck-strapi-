
import { Plus } from "lucide-react";
import AddPoint from "./AddPoint";
import { useFieldArray} from "react-hook-form";
import ErrorMsg from "../errorMsg";


const AddPoints = () => {
  const { fields, append, remove } = useFieldArray({
    // control,
    name: 'points'
  });
  

  return (

    <div className="flex flex-col   w-full p-2">
      <ErrorMsg msg='you cant add point before fill  all the previous points.' className='text-sm text-yellow-600 py-2' />
        {fields.map((field,index) => (
          
          <AddPoint key={field.id} field={field} index={index} remove={remove} />
            
        ))}
      <div
        onClick={() => append('')}
        className="border-yellow-500 border px-3 font-semibold cursor-pointer flex items-center  hover:bg-yellow-500 hover:text-white group rounded-lg "
      >
        <p>Add point</p>
        <Plus
          size={48}
          className=" cursor-pointer ml-auto group-hover:text-white text-amber-400"
        />
      </div>
    </div>
  );
};
export default AddPoints;
