import { createSlice } from "@reduxjs/toolkit";
import { CoreTypes } from "@/@types/namespaces";

const initialState: CoreTypes.Card.ICardDataSlice = {
  data: [],
};

export const CardDataSlice = createSlice({
  name: "CardData",
  initialState,
  reducers: {
    CardDataChangePayload: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const CardDataReducer = CardDataSlice.reducer;
export const CardDataActions = CardDataSlice.actions;
