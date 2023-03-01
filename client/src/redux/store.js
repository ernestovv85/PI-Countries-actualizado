import { configureStore } from "@reduxjs/toolkit";
import countries from "./conuntrySlice";

export default configureStore({
  reducer:{
    countries: countries
  }
})