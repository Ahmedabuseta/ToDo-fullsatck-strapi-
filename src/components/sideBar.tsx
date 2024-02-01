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
      className={`relative shadow-sm rounded-md shadow-slate-600 hscreen grid p-3 ${
        openMenu
          ? "w-24 p-1 text-xl overflow-hidden grid-cols-1"
          : " grid-cols-1 "
      }`}
    >
      <div className="flex-col">
        <div className="flex justify-between">
          {openMenu ? (
            <span
              className="cursor-pointer pb-3 text-center mx-auto "
              onClick={handleOpenMenu}
            >
              <Menu size={36} />
            </span>
          ) : (
            <>
              <h1 className="font-bold text-2xl">Menu</h1>
              <span className="cursor-pointer " onClick={handleOpenMenu}>
                <X />
              </span>
            </>
          )}
        </div>
        {openMenu ? (
          ""
        ) : (
          <div className="p-3">
            <Input
              placeholder="search"
              size="large"
              className=" bg-white dark:bg-[#232323] dark:text-white dark:focus:border-white"
              prefix={<SearchOutlined />}
            />
          </div>
        )}

        <div>
          <ul className="list-none">
            <h2 className="text-lg uppercase font-bold">tasks</h2>
            {/* {renderTasksColSidebar} */}
            <DrawSidebar list={tasksColSidebar} type='task' active={active} openMenu={openMenu} baseIdx={10} setActive={setActive} /> 
          </ul>
          <Divider />
          <ul className="list-none">
            <h2 className="text-lg uppercase font-bold">Lists</h2>
            <DrawSidebar list={listsColSidebar} type="list" active={active} openMenu={openMenu} baseIdx={106} setActive={setActive} /> 

            <li
              className={`${
                active === 10100 ? "bg-[#ebebeb] " : ""
              }flex justify-between items-center p-4 group  hover:bg-[#ebebeb] cursor-pointer rounded-md  hover:font-bold`}
              onClick={() => handleActive(10100)}
            >
              <span className="flex gap-1 items-center">
                <div className="w-10 h-10">
                  <Plus size={38} absoluteStrokeWidth className="mx-auto"/>
                </div>
                {openMenu ? (
                  ""
                ) : (
                  <span className="capitalize ">Add New List</span>
                )}
              </span>
            </li>
          </ul>
          <Divider className="bg-[#ebebeb]" />
          <h2 className="text-lg uppercase font-bold ">tags</h2>
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
          <Divider />
          <div
            className={`${
              openMenu ? " mx-auto w-20  " : "w-full"
            } h-full `}
          >
            <button className="flex p-1 w-full  items-center bg-yellow-500 rounded-md text-white  ">
              {openMenu ? (
                <LogOut
                  size={48}
                  className=" text-yellow-200 cursor-pointer hover:scale-110 transition duration-75 ease-in-out transform"
                />
              ) : (
                <>
                  <LogOut
                    size={48}
                    className=" text-yellow-200 cursor-pointer hover:scale-110 transition duration-75 ease-in-out transform"
                  />
                  <span className="font-bold text-xl ">Sign Out</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
