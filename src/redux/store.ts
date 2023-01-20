import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import loginSlice from "./features/loginSlice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    loginState: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
