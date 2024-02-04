import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function SelectList() {
  const { register } = useFormContext();
  const lists = useSelector((state: RootState) => state.lists);
  return (
    <div className="p-2 ">
      <select {...register('list')} className="py-3 px-4 pe-9 block w-full bg-white border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
        {lists?.map((list) => (
          <option key={list.id} value={list.id} className={`flex gap-1 ${list.color} text-[${list.color}] hover:bg-white cursor-pointer`}>
            {list.type}
          </option>
        ))}
      </select>
    </div>
  );
}
