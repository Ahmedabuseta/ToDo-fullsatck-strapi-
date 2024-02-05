import { SearchOutlined } from "@ant-design/icons";
import {  Divider, Input } from "antd";
import { LogOut, Menu, Plus, X } from "lucide-react";
import { useState } from "react";
import { ISidebar } from "../interface/interfaces";
import { listsColSidebar, tagsRowSidebar, tasksColSidebar } from "../data/data";
import DrawSidebar from "../utils/drawSidbar";
import AddTagBtn from "./ui/AddTagBtn";

//

function SideBar() {
  const [active, setActive] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleActive = (idx: number) => {
    setActive(idx);
  };

  const renderTagsRowSidebar = tagsRowSidebar.map(
    ({ title, color }: ISidebar, idx: number) => (
      <div
        key={idx}
        onClick={() => handleActive(idx + 100)}
        className={`${color} ${
          active === idx + 100 ? " scale-105 shadow-lg shadow-slate-400" : ""
        }  text-white ${
          openMenu ? "font-light text-sm p-1" : "font-bold p-2 ps-3 pe-3"
        }  flex justify-center items-center rounded-md capitalize cursor-pointer `}
      >
        {title}
      </div>
    )
  );

  console.log(openMenu);

  return (
    <aside
      className={` p-3  md:shadow-sm rounded-md md:shadow-slate-600    lg:p-3 ${
        openMenu
          ? "w-full  absolute inset-0 z-10 bg-white "
          : " md:relative p-3 bg-transparent"
      }`}
    >
      
        <div className={`sm:flex lg:hidden justify-between`}>
          
            <div
              className="cursor-pointer pb- w-full flex justify-between items-center text-cener mx-auto "
              onClick={handleOpenMenu}
            >
             {openMenu ?(<>
              <Input
              placeholder="search"
              size="large"
              className=" bg-white w-11/12 flex dark:bg-[#232323] dark:text-white  md:hidden dark:focus:border-white"
              prefix={<SearchOutlined />}
            />
              <X size={40}/>
             </>) : <Menu size={40} className="text-center mx-auto" />}
            </div>

          
        </div>
        <div className={`flex flex-col md:flex ${openMenu ? 'flex p-3' : 'hidden '}`}>
       
          <div className="p-3">
            <Input
              placeholder="search"
              size="large"
              className={`hidden lg:flex bg-white dark:bg-[#232323] dark:text-white  md:hidden dark:focus:border-white`}
              prefix={<SearchOutlined />}
            />
          </div>


        <div className="bg-white">
          <ul className="list-none">
            <h2 className="text-lg uppercase md:ps-1 font-bold">tasks</h2>
            {/* {renderTasksColSidebar} */}
            <DrawSidebar list={tasksColSidebar} setIsOpen={setOpenMenu} type='task' active={active} openMenu={openMenu} baseIdx={10} setActive={setActive} /> 
          </ul>
          <Divider className="m-2"/>
          <ul className="list-none">
            <h2 className="text-lg uppercase md:ps-1 font-bold">Lists</h2>
            <DrawSidebar list={listsColSidebar} setIsOpen={setOpenMenu} type="list" active={active} openMenu={openMenu} baseIdx={106} setActive={setActive} /> 
            <li
              className={`${
                active === 10100 ? "bg-[#ebebeb] " : ""
              }flex justify-between items-center p-2 group  hover:bg-[#ebebeb] cursor-pointer rounded-md  hover:font-bold`}
              onClick={() => handleActive(10100)}
            >
              <div className="flex gap-1 items-center">
                <div className="w-10 h-10">
                  <Plus size={38} absoluteStrokeWidth className="mx-auto"/>
                </div>
                
                  <span className="capitalize md:hidden flex lg:flex ">Add New List</span>
                
              </div>
            </li>
          </ul>
          <Divider className="m-2" />
          <h2 className="text-lg uppercase md:ps-1 font-bold ">tags</h2>
          <div
            className={`${
              openMenu
                ? "flex-col p-0 items-center justify-center gap-2 space-y-2 font-light"
                : "flex justify-start"
            }  items-center flex-wrap gap-2 p-3`}
          >
            {renderTagsRowSidebar}
            <AddTagBtn active={active} setActive={setActive} openMenu={openMenu} />
          </div>
          <Divider className="m-2" />
          <div
            className={`h-full bg-white`}>
            <button className="flex mx-auto p-1 w-full  items-center bg-yellow-500 rounded-md text-white  ">
              
                  <LogOut
                    size={48}
                    className=" text-yellow-200 cursor-pointer hover:scale-110 transition duration-75 ease-in-out transform"
                  />
                  <span className={`flex  ${openMenu ? 'md:flex w-full':'md:hidden'} font-bold w-full text-xl lg:flex`}>Log Out</span>
                
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
