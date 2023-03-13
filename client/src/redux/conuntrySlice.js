import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    allCountries: [],
  },

  reducers: {
    getAllCountries: (state, action) => {
      state.countries = action.payload;
      state.allCountries = action.payload;
    },
    countriesByName: (state, action) => {
      state.countries = action.payload;
    },
    filterCountriesAlphabetically: (state, action) => {
      let sortName =
        action.payload === "ascending"
          ? state.countries.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : action.payload === "descending"
          ? state.countries.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLower) {
                return 1;
              }
              if (b.name.toLowerCase() < a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.countries;
      state.countries = sortName;
    },
    filterByPopulation: (state, action) => {
      let sortPopulation =
        action.payload === "minimum"
          ? state.countries.sort((a, b) => {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : action.payload === "maxium"
          ? state.countries.sort((a, b) => {
              if (a.population < b.population) {
                return 1;
              }
              if (b.population < a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries;
      state.countries = sortPopulation;
    },
    filterByContinent: (state, action) => {
      let allCountries = state.allCountries;
      let continents =
        action.payload === "default"
          ? allCountries
          : allCountries.filter(
              (country) => country.continents === action.payload
            );
      state.countries = continents;
    },
  },
});

export const {
  getAllCountries,
  countriesByName,
  filterAlphabetically,
  filterByPopulation,
  filterByContinent,
} = countrySlice.actions;

export default countrySlice.reducer;
