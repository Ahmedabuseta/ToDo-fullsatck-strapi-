import { Badge } from "antd";
import { ISidebar } from "../interface/interfaces";
import { Link } from "react-router-dom";

interface Props {
  list: ISidebar[];
  baseIdx: number;
  openMenu: boolean;
  active: number | null;
  type: string;
  setIsOpen:(isOpen:boolean) => void;
  setActive: (idx: number) => void;
}

function DrawSidebar({
  list,
  baseIdx,
  openMenu,
  setIsOpen,
  active,
  setActive,
  type,
}: Props) {
  const handleActive = (idx: number) => {
    setActive(idx);
  };

  const handleCloseBar = ()=>{
    if(innerWidth <= 768){
      setIsOpen(false)
    }
  }
  console.log(list);
  const render = list.map(({ title, color, icon ,link}: ISidebar, idx: number) => ( 

  // <Link to={link} className='no-underline'>
  //   <li
  //     key={idx}
  //     onClick={() => handleActive(idx + baseIdx)}
  //     className={`
  //       ${
  //         active === idx + baseIdx
  //           ? " dark:bg-sky-500 dark:text-white font-bold bg-[#ebebeb] "
  //           : ""
  //       }flex justify-between items-center ${"p-4 hover:dark:bg-sky-500 hover:bg-[#ebebeb]"} group   cursor-pointer rounded-md  hover:font-bold`}
  //   >
      
      
  //     {openMenu ? (
  //       <Badge count={5} color="#555" size="small" offset={[7, 5]}>
  //         {type === "list" ? (
  //           <div
  //             className={`${color} mx-auto w-10 h-10 flex justify-center items-center rounded-md `}
  //           ></div>
  //         ) : (
  //           <span className="font-bold mx-auto">{icon}</span>
  //         )}
  //       </Badge>
  //     ) : (
  //       <>
  //         <span className="flex gap-2">
  //           {type === "list" ? (
  //             <div
  //               className={`${color} mx-auto w-10 h-10 flex justify-center items-center rounded-md `}
  //             ></div>
  //           ) : (
  //             <span className="font-bold :">{icon}</span>
  //           )}

  //           <span className="capitalize">{title}</span>
  //         </span>
  //         <span
  //           className={`${
  //             active === idx + baseIdx
  //               ? "dark:bg-black bg-white"
  //               : "dark:bg-sky-500 bg-[#ebebeb]"
  //           } dark:group-hover:bg-black group-hover:bg-white p-1 ps-2 pe-2 font-medium italic rounded-md`}
  //         >
  //           4
  //         </span>
  //       </>
  //     )}
      
  //   </li></Link> 

  <Link to={link} 
  onClick={handleCloseBar}
  className='no-underline'>
  <li
    key={idx}
    onClick={() => handleActive(idx + baseIdx)}
    className={`
      ${
        active === idx + baseIdx
          ? " dark:bg-sky-500 dark:text-white font-bold bg-[#ebebeb] "
          : ""
      }flex justify-between items-center ${"p-2 hover:dark:bg-sky-500 hover:bg-[#ebebeb]"} group   cursor-pointer rounded-md  hover:font-bold`}
  >
    
    

      <Badge count={5} color="#555" size="small" className={`${openMenu ? ' hidden' :' hidden md:flex lg:hidden'}`} offset={[7, 5]}>
        {type === "list" ? (
          <div
            className={`${color} mx-auto w-10 h-10 flex justify-center items-center rounded-md `}
          ></div>
        ) : (
          <span className="font-bold mx-auto">{icon}</span>
        )}
      </Badge>
   
      <>
        <div className={`${openMenu ? 'flex gap-2' :'flex gap-2 md:hidden  lg:flex'}`}>
          {type === "list" ? (
            <div
              className={`${color} mx-auto w-10 h-10 flex justify-center items-center rounded-md `}
            ></div>
          ) : (
            <span className="font-bold :">{icon}</span>
          )}

          <span className="capitalize  ">{title}</span>
        </div>
        <span
          className={`${
            active === idx + baseIdx
              ? "dark:bg-black bg-white"
              : "dark:bg-sky-500 bg-[#ebebeb]"
          } dark:group-hover:bg-black group-hover:bg-white p-1 ps-2 pe-2 font-medium  ${openMenu ? ' md:flex ':'md:hidden'}  flex lg:flex italic rounded-md`}
        >
          4
        </span>
      </>
    
    
  </li></Link> 

  
  ));

  return <>{render}</>;
}

export default DrawSidebar;
