import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "user/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        headers: { Accept: "application/json, text/plain, */*" },
    }),
    endpoints: (build) => ({
        getUser: build.query({
            query: () => ({
                url: "get-user",
            }),
        }),
    }),
});

export const { useGetUserQuery } = userApi;
