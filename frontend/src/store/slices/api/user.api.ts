import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoreTypes } from "@/@types/namespaces";

export const UserApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (build) => ({
    user: build.query<CoreTypes.User.IUserSource, string>({
      query: (payload) => ({
        url: `/user/${payload}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserQuery } = UserApi;
