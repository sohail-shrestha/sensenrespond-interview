import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../features/home/slice";

const store = configureStore({
  reducer: {
    home: homeReducer
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { AppDispatch, RootState };

