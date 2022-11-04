import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";
import ordersSlice from "../features/orders/ordersSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todos: todoSlice,
    orders: ordersSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;