import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { AuthReducer } from "./slices/auth/auth.slice";
import { ContentControllerReducer } from "./slices/controller/controller.slice";
import { CardDataReducer } from "./slices/data/data.slice";
import { SearchModalReducer } from "./slices/modal/search.modal.slice";
import { ChannelControllerReducer } from "./slices/channel/channel.slice";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    ContentController: ContentControllerReducer,
    CardData: CardDataReducer,
    SearchModal: SearchModalReducer,
    Channel: ChannelControllerReducer,
  },
  middleware: [thunk],
});

export type TypedRootState = ReturnType<typeof store.getState>;
