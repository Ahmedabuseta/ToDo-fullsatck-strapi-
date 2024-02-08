import { useState, useEffect } from "react";
import Modal from "../ui/modal";
import StickWallForm from "./stickWallForm";
import { useParams } from "react-router-dom";

type CreateStickWallProps = {
  // add type annotations for props here if needed
};

const CreateStickWall: React.FC<CreateStickWallProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(true);

  const { stickID } = useParams();
  console.log(stickID);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} key={stickID}>
        <StickWallForm setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default CreateStickWall;