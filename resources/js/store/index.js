import { configureStore } from "@reduxjs/toolkit";
import { unauthenticatedMiddleware } from "./middleware/unauthenticatedMiddleware.js";
import { userApi } from "./user/user.api";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            userApi.middleware,
            unauthenticatedMiddleware,
        ]),
});
