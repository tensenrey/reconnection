import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoreTypes } from "@/@types/namespaces";

export const AuthApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (build) => ({
    signIn: build.query<CoreTypes.Auth.IAuthToken, CoreTypes.Auth.ISignInSlice>(
      {
        query: (payload) => ({
          url: "/auth/signin",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }),
      }
    ),
    signUp: build.query<CoreTypes.Auth.IAuthToken, CoreTypes.Auth.ISignUpSlice>(
      {
        query: (payload) => ({
          url: "/auth/signup",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }),
      }
    ),
  }),
});

export const { useLazySignInQuery, useLazySignUpQuery } = AuthApi;
