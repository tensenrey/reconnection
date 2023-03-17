import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoreTypes } from "@/@types/namespaces";

export const AuthApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/auth",
  }),
  endpoints: (build) => ({
    signIn: build.query<CoreTypes.Auth.IAuthToken, CoreTypes.Auth.IAuthSlice>({
      query: (payload) => ({
        url: "/signin",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useLazySignInQuery } = AuthApi;
