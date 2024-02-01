import { Plus } from "lucide-react";

interface Props {
  openMenu?: boolean;
  active?: number | null;
  setActive: (idx: number) => void ;
  className?:string;
}

const AddTagBtn = ({ openMenu, active, setActive ,className}: Props) => {
  const handleActive = (idx: number) => {
    setActive(idx);
  };
  return (
    <div
      onClick={() => handleActive(100100)}
      className={` ${
        active === 100100 ? " scale-105 shadow-lg shadow-slate-400" : ""
      }  p-2 ps-3 pe-3 bg-[#ebebeb] text-zinc-700 text-md ${className} font-bold flex justify-center items-center rounded-md capitalize cursor-pointer  `}
    >
      <Plus />
      {openMenu ? "" : "Add Tag"}
    </div>
  );
};
export default AddTagBtn;
