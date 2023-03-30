import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { SignInReducer } from "./slices/signin/signin.slice";
import { SignUpReducer } from "./slices/signup/signup.slice";
import { ContentControllerReducer } from "./slices/controller/controller.slice";
import { CardDataReducer } from "./slices/data/data.slice";
import { SearchModalReducer } from "./slices/modal/search.modal.slice";
import { ChannelControllerReducer } from "./slices/channel/channel.slice";
import { AuthApi } from "./slices/api/auth.api";

export const store = configureStore({
  reducer: {
    SignIn: SignInReducer,
    SignUp: SignUpReducer,
    ContentController: ContentControllerReducer,
    CardData: CardDataReducer,
    SearchModal: SearchModalReducer,
    Channel: ChannelControllerReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware, thunk),
});

export type TypedRootState = ReturnType<typeof store.getState>;
