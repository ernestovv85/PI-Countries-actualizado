import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
  },

  reducers: {
    getAllCountries: (state, action) => {
      state.countries = action.payload;
    },
    countriesByName: (state, action) => {
      state.countries = action.payload
    },
  },
});

export const { getAllCountries, countriesByName } = countrySlice.actions;

export default countrySlice.reducer;
