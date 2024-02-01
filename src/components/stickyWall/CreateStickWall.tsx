import { Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../ui/modal";
import StickWallForm from "./stickWallForm";


const CreateStickWall = () => {
  const [isOpen, setIsOpen] = useState(false)


  function openModal() {
    setIsOpen(true)
  }
return(
<div className={` bg-[#ebebeb] rounded-md shadow-md p-4 w-80 h-80 flex justify-center items-center cursor-pointer`}
  onClick={openModal}
  >
  <Plus size={64}  color="#5b5b5b"/>
  <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
  <StickWallForm setIsOpen={setIsOpen}/>
    </Modal>
</div>
)
}
export default CreateStickWall;