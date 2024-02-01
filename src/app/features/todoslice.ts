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
        description:"description"
      },
      {
        id:2,
        title:"Sub Task 2",
        description:"description"
      }
    ],
    tags:[
      "tag 1",
      "tag 2",
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
      state=[...state, action.payload];
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