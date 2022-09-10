import { createSlice } from "@reduxjs/toolkit";

import mockData from "./mockData/age-of-empires-units.json";

const initialFilterState = {
  units: mockData.units,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    ageFilter(state, action) {
      state.age = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
