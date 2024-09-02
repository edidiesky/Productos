import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./features/room/roomSlice";
import modalSlice from "./features/modals/modalSlice";
import authSlice from "./features/auth/authSlice";
import paymentSlice from "./features/payment/paymentSlice";
import statSlice from "./features/stat/statSlice";
import cartSlice from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    room: roomSlice,
    modal: modalSlice,
    auth: authSlice,
    payment: paymentSlice,
    stat: statSlice,
    cart: cartSlice,
  },
});
