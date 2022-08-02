const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: false,
        component: null,
    },
    reducers: {
        toggleFilter(state) {
            state.filter = !state.filter;
        },
        setComponent(state, { payload }) {
            state.component = payload;
        },
    },
});

export const { toggleFilter, setComponent } = filterSlice.actions;

export default filterSlice.reducer;
