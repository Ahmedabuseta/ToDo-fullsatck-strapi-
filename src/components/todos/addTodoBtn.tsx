import { Plus } from "lucide-react"
import { Link } from "react-router-dom"
interface IProps{
  title: string
}
function AddTodoBtn({title}: IProps ){

  return (
    <Link to='createTodo' className="flex space-x-2 items-center justify-start shadow-sm my-2 rounded-md text-[#ababab] border cursor-pointer p-2">
      <Plus color="#ababab"/>
      <h2>
        Add New {title}
      </h2>
    </Link>
  )
}

export default AddTodoBtn
