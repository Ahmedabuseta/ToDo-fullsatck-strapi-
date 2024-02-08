import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import StickWall from "./StickWall";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const StickWalls = () => {
  const stickyWalls = useSelector((state: RootState) => state.stickWalls);
  console.log(stickyWalls);

  return (
    <div className="p-4 rounded-xl shadow-sm flex flex-wrap justify-center gap-4  border-zinc-300 border min-h-[800px] items-start">
      <Link
        to="create"
        className={` bg-[#ebebeb] rounded-md shadow-md p-4 w-80 h-80 flex justify-center items-center cursor-pointer`}
      >
        <Plus size={64} color="#5b5b5b" />
      </Link>
      {stickyWalls.map((stickWall) => (
        <StickWall stickWall={stickWall} />
      ))}
    </div>
  );
};
export default StickWalls;
