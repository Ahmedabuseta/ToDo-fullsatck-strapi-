import {  ReactNode } from "react";

export interface ISubTasks {
  id:number | unknown | string ;
  title:string;
}
export interface IList {
  id:number | unknown ;
  color :string;
  type:string;
}
export interface ITodo {
  id: number | null ;
  title: string;
  description?:string;
  list? : IList;
  subTasks?:ISubTasks[];
  tags?:{id:string;name:string;}[];
  dueDate:string;
  children?:string | number;
  isCompleted:boolean;
}

export interface InputPoint {
  id: number;
  value: string;
  name: string;
}
export interface IStickyWall {
  id:number | unknown ;
  title:string;
  color:string;
  points:string[]
}

export interface IRegisterData {
  name:'userName' | 'email' | 'password';
  placeholder:string;
  type:string;
}
export interface ILoginData{
  name:'email' |'password';
  placeholder:string;
  type:string;
}
export interface ISidebar {
  openMenu?: string
  title: string;
  icon?: ReactNode;
  color?: string;
  link:string;
}
