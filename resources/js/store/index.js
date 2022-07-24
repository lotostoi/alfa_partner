import { configureStore } from "@reduxjs/toolkit";
import { unauthenticatedMiddleware } from "./middleware/unauthenticatedMiddleware.js";
import { userApi } from "./user/user.api";
import { headerApi } from "./header";
import filterSlice from "./actions/filterActions";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [headerApi.reducerPath]: headerApi.reducer,
        filters: filterSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            userApi.middleware,
            headerApi.middleware,
            unauthenticatedMiddleware,
        ]),
});
