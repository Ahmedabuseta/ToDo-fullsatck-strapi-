import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../interface/interfaces";

const initialState: ITodo[] = [
  {
    id:1,
    title:"Todo 1",
    list:{
      id:1,
      color:"bg-red-500",
      type:"list",

    },
    subTasks:[
      {
        id:1,
        title:"Sub Task 1",
      },
      {
        id:2,
        title:"Sub Task 2",
      }
    ],
    tags:[
      {id:'2',name:"tag 1"},
      {id:'6',name:"tag 2"},
    ],
    dueDate:"10/10/2022",
    description:"description",
    isCompleted:false,
  }, {
    id:3,
    title:"Todo 1",
    list:{
      id:1,
      color:"bg-red-500",
      type:"list",

    },
    subTasks:[
      {
        id:1,
        title:"Sub Task 1",
      },
      {
        id:2,
        title:"Sub Task 2",
      }
    ],
    dueDate:"10/10/2022",
    description:"description",
    isCompleted:false,
  }, {
    id:5,
    title:"Todo 1",
    list:{
      id:1,
      color:"bg-red-500",
      type:"list",

    },
    
    tags:[
      {id:'2',name:"tag 1"},
      {id:'6',name:"tag 2"},
    ],
    dueDate:"10/10/2022",
    description:"description",
    isCompleted:false,
  }
]
export const todoSlice =createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action:PayloadAction<ITodo>) =>{
     return state=[...state, action.payload];
    },
    removeTodo:(state,action:PayloadAction<number>) =>{
      state=state.filter(todo => todo.id !== action.payload)
    },
    editTodo:(state,action:PayloadAction<ITodo>) =>{
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index] = action.payload
    },
  }
})
export const {addTodo , removeTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer