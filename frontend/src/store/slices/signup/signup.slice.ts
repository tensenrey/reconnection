import { createSlice } from "@reduxjs/toolkit";
import { CoreTypes } from "@/@types/namespaces";

const initialState: CoreTypes.Auth.ISignUpSlice = {
  email: "",
  password: "",
  repassword: "",
};

export const SignUpSlice = createSlice({
  name: "SignUp",
  initialState,
  reducers: {
    SignUpChangeEmail: (state, action) => {
      state.email = action.payload;
    },
    SignUpChangePassword: (state, action) => {
      state.password = action.payload;
    },
    SignUpChangeRepassoword: (state, action) => {
      state.repassword = action.payload;
    },
  },
});

export const SignUpReducer = SignUpSlice.reducer;
export const SignUpActions = SignUpSlice.actions;
