
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// 🔑 These give us typed versions of dispatch & state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
