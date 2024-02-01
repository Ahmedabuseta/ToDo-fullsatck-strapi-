import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoslice";
import listSlice from "./features/listSlice";
import stickywallSlice from "./features/stickywall";

const store = configureStore({
  reducer: {
    lists: listSlice,
    stickWalls: stickywallSlice,
    todos: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { posts: PostsState, comments: CommentsState, users: UsersState }
// export type AppDispatch = typeof store.dispatch;

export default store;
