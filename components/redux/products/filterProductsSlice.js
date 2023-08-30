import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    ageFilter: null,
    creatorFilter: null,
    dateFilter: null,
    priceFilter: null,
    categoryFilter: null,
  },
  reducers: {
    setAgeFilter: (state, action) => {
      state.ageFilter = action.payload;
    },
    setCreatorFilter: (state, action) => {
      state.creatorFilter = action.payload;
    },
    setDateFilter: (state, action) => {
      state.dateFilter = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
  },
});

export const {
  setAgeFilter,
  setCreatorFilter,
  setDateFilter,
  setPriceFilter,
  setCategoryFilter,
} = filtersSlice.actions;
export default filtersSlice.reducer;
