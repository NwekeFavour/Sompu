import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authslice";
import { reducer as notificationsReducer } from "reapop";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["notifications"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
