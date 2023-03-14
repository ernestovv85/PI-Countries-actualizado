import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
  },
  reducers: {
    getAllActivities: (state, action) => {
      state.activities.push(action.payload);
    },
  },
})

export const { getAllActivities } = activitySlice.actions;

export default activitySlice.reducer;
