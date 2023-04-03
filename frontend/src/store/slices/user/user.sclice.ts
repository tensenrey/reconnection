import { createSlice } from "@reduxjs/toolkit";
import { CoreTypes } from "@/@types/namespaces";

const initialState: CoreTypes.User.UserDTO = {
  user: {
    id: null,
    username: null,
    email: null,
    avatar: null,
    description: null
  }
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    UserSetPayload: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const UserReducer = UserSlice.reducer;
export const UserActions = UserSlice.actions;
