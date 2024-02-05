import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStickyWall } from "../../interface/interfaces";

const initialState: IStickyWall[]= [
    {
      id: 55555,
      title: "Sticky Wall 1",
      color: "bg-red-500",
      points: ["points 1", "points 2"],
    },
    {
      id: 1242,
      title: "Sticky Wall 1",
      color: "bg-yellow-500",
      points: ["points 1", "points 2"],
    },
    {
      id: 14322,
      title: "Sticky Wall 1",
      color: "bg-sky-500",
      points: ["points 1", "points 2"],
    },
  ]
const stickyWallSlice = createSlice({
  name: "stickyWall",
  initialState,
  reducers: {
    addStickyWall: (state, action: PayloadAction<IStickyWall>) => {

      return [...state , action.payload]
    },
    editStickyWall: (state, action: PayloadAction<IStickyWall>) => {
      const index = state.findIndex(
        (stickyWall) => stickyWall.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeStickyWall: (state, action: PayloadAction<number>) => {
      return state.filter(
        (stickWall) => stickWall.id !== action.payload
      );
    },
}});

export const { addStickyWall ,editStickyWall, removeStickyWall } =
  stickyWallSlice.actions;
export default stickyWallSlice.reducer;
