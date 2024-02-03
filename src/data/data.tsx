import { DoubleRightOutlined } from "@ant-design/icons";
import { ILoginData, IRegisterData, ISidebar  } from "../interface/interfaces";
import { CalendarDays, List, StickyNote } from "lucide-react";

export const registerInputData: IRegisterData[]= [
  {
    name: "userName",
    placeholder: "userName",
    type: "text",
  },{
    name: "password",
    placeholder: "password",
    type: "password",
  },{
    name: "email",
    placeholder: "email",
    type: "email",
  },
];
export const loginInputData : ILoginData[] =[
  {
    name: "email",
    placeholder: "email",
    type: "email",
  },{
    name: "password",
    placeholder: "password",
    type: "password",
  },
]
export const tasksColSidebar: ISidebar[] = [
  {
    title: "tomorrow",
    icon: <DoubleRightOutlined  className='dark:text-white  text-lg'/>,
    link:'upcoming'
  },
  {
    title: "today",
    icon: <List  className='dark:text-white  text-lg' />,
    link:'today'
  },
  {
    title: "calendar",
    icon: <CalendarDays  className='dark:text-white  text-lg'/>,
    link:'calendar'
  },
  {
    title: "stickWall",
    icon: <StickyNote className='dark:text-white  text-lg' />,
    link:'stickywall'
  },
];
export const listsColSidebar: ISidebar[] = [
  {
    title: "personal",
    color: "bg-red-500",
    link:''
  },
  {
    title: "work",
    color: "bg-yellow-500",
    link:''
  },
  {
    title: "list 1",
    color: "bg-blue-500",
    link:''
  },
];
export const tagsRowSidebar: ISidebar[] = [
  {
    title: "tag 1",
    color: "bg-sky-500",
    link:' '
  },
  {
    title: "tag 2",
    color: "bg-purple-500",
    link:' '
  },
];