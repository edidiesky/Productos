"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginmodal: false,
  registermodal: false,
  cartmodal: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    onLoginModal: (state, action) => {
      state.loginmodal = true;
    },
    offLoginModal: (state, action) => {
      state.loginmodal = false;
    },

    onRegisterModal: (state, action) => {
      state.registermodal = true;
    },
    offRegisterModal: (state, action) => {
      state.registermodal = false;
    },
    offCartModal: (state, action) => {
      state.cartmodal = false;
    },
    onCartModal: (state, action) => {
      state.cartmodal = true;
    },
  },
});

export const {
  onLoginModal,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
  onCartModal,
  offCartModal
} = modalSlice.actions;

export default modalSlice.reducer;
