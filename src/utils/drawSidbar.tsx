import { Badge } from "antd";
import { ISidebar } from "../interface/interfaces";

interface Props {
  list: ISidebar[];
  baseIdx: number;
  openMenu: boolean;
  active: number | null;
  type: string;
  setActive: (idx: number) => void;
}

function DrawSidebar({
  list,
  baseIdx,
  openMenu,
  active,
  setActive,
  type,
}: Props) {
  const handleActive = (idx: number) => {
    setActive(idx);
  };
  console.log(list);
  const render = list.map(({ title, color, icon }: ISidebar, idx: number) => (
    <li
      key={idx}
      onClick={() => handleActive(idx + baseIdx)}
      className={`
        ${
          active === idx + baseIdx
            ? " dark:bg-sky-500 dark:text-white font-bold bg-[#ebebeb] "
            : ""
        }flex justify-between items-center ${"p-4 hover:dark:bg-sky-500 hover:bg-[#ebebeb]"} group   cursor-pointer rounded-md  hover:font-bold`}
    >
      {openMenu ? (
        <Badge count={5} color="#555" size="small" offset={[7, 5]}>
          {type === "list" ? (
            <div
              className={`${color} mx-auto w-10 h-10 flex justify-center items-center rounded-md `}
            ></div>
          ) : (
            <span className="font-bold mx-auto">{icon}</span>
          )}
        </Badge>
      ) : (
        <>
          <span className="flex gap-2">
            {type === "list" ? (
              <div
                className={`${color} mx-auto w-10 h-10 flex justify-center items-center rounded-md `}
              ></div>
            ) : (
              <span className="font-bold :">{icon}</span>
            )}

            <span className="capitalize">{title}</span>
          </span>
          <span
            className={`${
              active === idx + baseIdx
                ? "dark:bg-black bg-white"
                : "dark:bg-sky-500 bg-[#ebebeb]"
            } dark:group-hover:bg-black group-hover:bg-white p-1 ps-2 pe-2 font-medium italic rounded-md`}
          >
            4
          </span>
        </>
      )}
    </li>
  ));

  return <>{render}</>;
}

export default DrawSidebar;
