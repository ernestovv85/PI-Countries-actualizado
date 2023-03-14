import axios from "axios";
import {
  getAllCountries,
  countriesByName,
  filterAlphabetically,
  filterByPopulation,
  filterByContinent,
  filterByActivity,
} from "./conuntrySlice";

export function getCountries() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/countries");
    return dispatch(getAllCountries(json.data));
  };
}

export function getCountriesByName(name) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
    return dispatch(countriesByName(json.data));
  };
}

export function getCountriesAlphabetically(payload) {
  return filterAlphabetically(payload);
}

export function getCountriesPopulation(payload) {
  return filterByPopulation(payload)
}

export function getCountriesContinent(payload) {
  return filterByContinent(payload)
}

export function getCountriesActivity(payload) {
  return filterByActivity(payload)
}
