import axios from "axios";
import { getAllCountries } from "./conuntrySlice";

export function getCountries() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/countries");
    return dispatch(getAllCountries(json.data));
  };
}
