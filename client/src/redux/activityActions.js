import axios from "axios";
import { getAllActivities } from "./activitySlice";

export function getActivities() {
  return async function (dispatch){
    let json = await axios.get("http://localhost:3001/countries")
    return dispatch(getAllActivities(json.data));
  }
}