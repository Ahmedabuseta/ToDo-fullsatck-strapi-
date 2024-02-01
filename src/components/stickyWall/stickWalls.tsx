import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import StickWall from "./StickWall";
import CreateStickWall from "./CreateStickWall";

const StickWalls = () => {
  const stickyWalls = useSelector((state: RootState) => state.stickWalls);
  console.log(stickyWalls);

  return (
    <div className="p-4 rounded-xl shadow-sm flex flex-wrap justify-center gap-4  border-zinc-300 border min-h-[800px] items-start">
      <CreateStickWall />
      {stickyWalls.map((stickWall) => (
        <StickWall stickWall={stickWall} />
      ))}
      
    </div>
  );
};
export default StickWalls;
