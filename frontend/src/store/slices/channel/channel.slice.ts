import { createSlice } from "@reduxjs/toolkit";
import { CoreTypes } from "@/@types/namespaces";

const initialState: CoreTypes.Channel.IChannelSlice = {
  sockets: [],
};

export const ChannelControllerSlice = createSlice({
  name: "ContentController",
  initialState,
  reducers: {
    ChannelControllerJoinEvent: (state, action) => {
      const hasCheck = state.sockets.find(({ id }) => id === action.payload.id);

      if (hasCheck === undefined) {
        state.sockets.push(action.payload);
      }
    },
    ChannelControllerLeaveEvent: (state, action) => {
      state.sockets = state.sockets.filter(
        (el: CoreTypes.Channel.IChannelClient) =>
          el.id === action.payload.socket
      );
    },
  },
});

export const ChannelControllerReducer = ChannelControllerSlice.reducer;
export const ChannelControllerActions = ChannelControllerSlice.actions;
