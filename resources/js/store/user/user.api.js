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
        isAuth: build.query({
            query: () => ({
                url: "is-login",
            }),
        }),
        getDataForSelectsProfilePayment: build.query({
            query: () => ({
                url: "get-data-for-selects-profile-payment",
            }),
            transformResponse: (data) => {
                data.onboardingUserTypes = Object.keys(
                    data.onboardingUserTypes
                ).map((key) => ({
                    key,
                    content: data.onboardingUserTypes[key],
                }));

                data.paymentPeriods = Object.keys(data.paymentPeriods).map(
                    (key) => ({
                        key,
                        content: data.paymentPeriods[key],
                    })
                );

                return data;
            },
        }),
    }),
});

export const {
    useGetUserQuery,
    useIsAuthQuery,
    useGetDataForSelectsProfilePaymentQuery,
} = userApi;
