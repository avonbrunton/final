import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user";
import cartReducer from "./reducer/cart";
export const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
  devTools: true,
});
