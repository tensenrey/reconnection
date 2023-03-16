import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444/auth',
  }),
  endpoints: build => ({
    signIn: build.query<any, any>({
      query: (payload: any) => ({ 
        url: '/signin',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
    }),
  })
});

export const { useLazySignInQuery } = AuthApi;
