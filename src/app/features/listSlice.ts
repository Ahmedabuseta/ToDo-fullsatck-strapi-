import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IList } from "../../interface/interfaces";

const initialState : IList[] = []
const listSlice = createSlice({
  name:'lists',
  initialState,
  reducers:{
    addList : (state , action:PayloadAction<IList>)=>{
      return [...state,action.payload]
    },
    editList : (state,action:PayloadAction<IList>) =>{
      const index = state.findIndex(list=> list.id === action.payload.id)
      if(index !== -1){
        state[index]=action.payload;
    }
  },
  removeList:(state,action:PayloadAction<number>) =>{
    state=state.filter(list => list.id !== action.payload)
  },
}
})

export const {addList ,editList,removeList } = listSlice.actions
export default listSlice.reducer