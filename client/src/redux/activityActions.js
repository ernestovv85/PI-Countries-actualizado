import axios from "axios";
import { getAllActivities, create} from "./activitySlice";

export function getActivities() {
  return async function (dispatch){
    let json = await axios.get("http://localhost:3001/activities")
    return dispatch(getAllActivities(json.data));
  }
}

export function createActivity(payload) {
  return async function (dispatch) {
    let json = await axios.post("http://localhost:3001/activities", payload)
    return dispatch(create(json.data));
  }
}