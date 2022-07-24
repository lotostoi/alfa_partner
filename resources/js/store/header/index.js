import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const headerApi = createApi({
    reducerPath: "header/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        headers: { Accept: "application/json, text/plain, */*" },
    }),
    endpoints: (build) => ({
        getCountNotSeeTickets: build.query({
            query: ({ userId }) => ({
                url: "get-not-see-tickets",
                params: { userId },
            }),
        }),
    }),
});

export const { useGetCountNotSeeTicketsQuery } = headerApi;
