import { createSlice } from "@reduxjs/toolkit";
import { CoreTypes } from "@/@types/namespaces";

const initialState: CoreTypes.Auth.ISignInSlice = {
  email: "",
  password: "",
};

export const SignInSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {
    SignInChangeEmail: (state, action) => {
      state.email = action.payload;
    },
    SignInChangePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const SignInReducer = SignInSlice.reducer;
export const SignInActions = SignInSlice.actions;
