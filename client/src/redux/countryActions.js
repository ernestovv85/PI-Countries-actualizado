import axios from "axios";
import { getAllCountries, countriesByName } from "./conuntrySlice";

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
