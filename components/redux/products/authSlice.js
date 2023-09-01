import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authMode: null
}

const authSlice = createSlice({
    name: "authMode",
    initialState,
    reducers: {
        updateAuth: (state, action) => {
            state.authMode = action.payload;
        }
    }
})

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;