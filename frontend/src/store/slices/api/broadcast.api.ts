import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoreTypes } from "@/@types/namespaces";

export const BroadcastApi = createApi({
  reducerPath: "broadcast/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (build) => ({
    getAllCard: build.query<any, CoreTypes.Card.ICardData[]>({
      query: () => ({
        url: "/broadcast",
        method: "GET",
      }),
    }),
    getCardById: build.query<string, CoreTypes.Card.ICardData>({
      query: (id) => ({
        url: `/broadcast/${id}`,
        method: "GET",
      }),
    }),
    postCard: build.query<CoreTypes.Card.ICardData, Pick<CoreTypes.Card.ICardData, "id">>({
      query: (payload) => ({
        url: `/broadcast`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
      }),
    }),
    putCardById: build.query<CoreTypes.Card.ICardData, CoreTypes.Card.ICardData>({
      query: (payload) => ({
        url: `/broadcast/${payload.id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
      }),
    }),
    deleteCardById: build.query<CoreTypes.Card.ICardData, any>({
      query: (payload) => ({
        url: `/broadcast/${payload.id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {} = BroadcastApi;
