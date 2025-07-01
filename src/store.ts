import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./services/githubApi";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
