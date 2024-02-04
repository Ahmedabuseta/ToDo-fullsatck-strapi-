import {useFormContext} from 'react-hook-form'
import ErrorMsg from '../errorMsg';

interface iProps {}

const CreateTask = ({}: iProps) => {
const {register,formState: { errors },} = useFormContext()
  return ( 
    <div>
      <input type="text" placeholder="write your title" className="w-full  p-2 rounded-lg mt-2" {...register('title',{required:'title is required'})} />
      {errors.title &&<ErrorMsg msg={errors?.title?.message as string} />}
      <textarea className="w-full bg- p-2 rounded-lg mt-2" placeholder="write your description" {...register('description')} />
    </div>
  );
};
export default CreateTask;
  