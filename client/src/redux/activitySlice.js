import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
  },
  reducers: {
    getAllActivities: (state, action) => {
      state.activities = action.payload;
    },
    create: (state, action) => {
      state.activities = [...state.activities, action.payload];
    },
  },
});

export const { getAllActivities, create } = activitySlice.actions;

export default activitySlice.reducer;
