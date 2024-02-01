import { Plus } from "lucide-react"
interface IProps{
  title: string
}
function AddNewTodo({title}: IProps ){

  return (
    <div className="flex space-x-2 items-center justify-start shadow-sm my-2 rounded-md text-[#ababab] border cursor-pointer p-2">
      <Plus color="#ababab"/>
      <h2>
        Add New {title}
      </h2>
    </div>
  )
}

export default AddNewTodo
