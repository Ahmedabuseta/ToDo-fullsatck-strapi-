// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import SideBar from "../components/sideBar";
import StickyWallPage from './stickyWall.tsx'
// import Todos from "./todos";
// import EditToDo from "../components/EditToDo";

const RootLayout = () => {
  
  return (
    <div className="   ">
      {/* <Navbar /> */}
      <div className=" space-x-4  grid grid-cols-12">
        <div className="lg:col-span-3 xl:col-span-2 md:col-span-3">
        <SideBar/></div>
        {/* <Todos/> */}
        {/* <EditToDo /> */}
        <div className="lg:col-span-9 xl:col-span-10 md:col-span-9">
          <StickyWallPage />
        </div>
        
      </div>
      
      {/* <div className="container">
        <Outlet />
      </div> */}
    </div>
  );
};

export default RootLayout;
