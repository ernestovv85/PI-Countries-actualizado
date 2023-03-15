import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    allCountries: [],
    country: [],
  },

  reducers: {
    getAllCountries: (state, action) => {
      state.countries = action.payload;
      state.allCountries = action.payload;
    },
    countriesByName: (state, action) => {
      state.countries = action.payload;
    },
    countriesById: (state, action) => {
      state.country = action.payload;
    },
    clearDetail: (state) => {
      state.country = [];
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
    filterByActivity: (state, action) => {
      let activity =
        action.payload === "default"
          ? state.allCountries
          : state.allCountries.filter((country) => {
              const activities = country.activities.map(
                (activity) => activity.name
              );
              return activities.includes(action.payload);
            });
      state.countries = activity;
    },
  },
});

export const {
  getAllCountries,
  countriesByName,
  filterAlphabetically,
  filterByPopulation,
  filterByContinent,
  filterByActivity,
  countriesById,
  clearDetail,
} = countrySlice.actions;

export default countrySlice.reducer;
