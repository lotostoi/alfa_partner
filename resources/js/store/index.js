import { configureStore } from "@reduxjs/toolkit";
import { unauthenticatedMiddleware } from "./middleware/unauthenticatedMiddleware.js";
import { userApi } from "./user/user.api";
import filterSlice from "./actions/filterActions";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        filters: filterSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            userApi.middleware,
            unauthenticatedMiddleware,
        ]),
});
