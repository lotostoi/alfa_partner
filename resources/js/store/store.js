import {configureStore} from "@reduxjs/toolkit";
import filterSlice from './actions/filterActions';

export const store = configureStore({
    reducer: {
        filters: filterSlice,
    },
    devTools: true,
});
