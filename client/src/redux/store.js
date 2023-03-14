import { configureStore } from "@reduxjs/toolkit";
import countries from "./conuntrySlice";
import activities from "./activitySlice"


export default configureStore({
  reducer:{
    countries: countries,
    activities: activities
  }
})