import { createSlice } from "@reduxjs/toolkit";
import { CoreTypes } from "@/@types/namespaces";

const initialState: CoreTypes.LayoutController.IControllerSlice = {
  transform: 0,
  currentLayout: CoreTypes.LayoutController.LayoutsList.Posts,
};

export const ContentControllerSlice = createSlice({
  name: "ContentController",
  initialState,
  reducers: {
    ContentControllerChangeTransform: (state, action) => {
      state.transform = action.payload;
    },
    ContentControllerChangeLayout: (state, action) => {
      state.currentLayout = action.payload;
    },
  },
});

export const ContentControllerReducer = ContentControllerSlice.reducer;
export const ContentControllerActions = ContentControllerSlice.actions;
