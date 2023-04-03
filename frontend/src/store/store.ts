import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { SignInReducer } from "./slices/signin/signin.slice";
import { SignUpReducer } from "./slices/signup/signup.slice";
import { ContentControllerReducer } from "./slices/controller/controller.slice";
import { CardDataReducer } from "./slices/data/data.slice";
import { SearchModalReducer } from "./slices/modal/search.modal.slice";
import { ChannelControllerReducer } from "./slices/channel/channel.slice";
import { UserReducer } from "./slices/user/user.sclice";
import { AuthApi } from "./slices/api/auth.api";
import { UserApi } from "./slices/api/user.api";

export const store = configureStore({
  reducer: {
    User: UserReducer,
    SignIn: SignInReducer,
    SignUp: SignUpReducer,
    ContentController: ContentControllerReducer,
    CardData: CardDataReducer,
    SearchModal: SearchModalReducer,
    Channel: ChannelControllerReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware, UserApi.middleware, thunk),
});

export type TypedRootState = ReturnType<typeof store.getState>;
