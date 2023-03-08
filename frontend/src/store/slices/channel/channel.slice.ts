import { createSlice } from "@reduxjs/toolkit";
import { CoreTypes } from "@/@types/namespaces";

const initialState: CoreTypes.Channel.IChannelSlice = {
  sockets: [{ socket: "centenario" }, { socket: "tensenrey" }],
};

export const ChannelControllerSlice = createSlice({
  name: "ContentController",
  initialState,
  reducers: {
    ChannelControllerJoinEvent: (state, action) => {
      state.sockets.push(action.payload);
    },
    ChannelControllerLeaveEvent: (state, action) => {
      state.sockets = state.sockets.filter(
        (el: CoreTypes.Channel.IChannelClient) =>
          el.socket === action.payload.socket
      );
    },
  },
});

export const ChannelControllerReducer = ChannelControllerSlice.reducer;
export const ChannelControllerActions = ChannelControllerSlice.actions;
