import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Step 1 - Set filter states here
// Step 2 - Add reducers to the store
// Step 3 - In another component create a filter logic
// Step 4 - Display filtered content

const initialState = {
    categoryFilter: null,
    ageFilter: null,
    priceFilter: null,
    releaseDateFilter: null,
    creatorFilter: null
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducer
})

export default filterSlice.reducer;