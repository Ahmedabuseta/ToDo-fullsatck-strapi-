import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import SideBar from "../components/sideBar";
// import StickyWallPage from "./stickyWall.tsx";
// import Todos from "./todos";
// import EditToDo from "../components/EditToDo";

const RootLayout = () => {
  return (
    <div className="  ">
      {/* <Navbar /> */}
      <div className=" space-x-4 flex flex-col md:flex-row">
        <div className="flex justify-between md:p-0 md:h-screen items-center md:items-stretch  ">
          <h1 className="font-bold italic flex text-xl ps-3 bg-white md:hidden">amd_6</h1>
          <SideBar />
        </div>
        <div className="w-full mb-5 md:mb-1 flex-grow">
          <Outlet />
        </div>
      </div>

      <div className="container">
        
      </div>
    </div>
  );
};

export default RootLayout;
