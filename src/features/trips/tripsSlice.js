import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  trips: [], // empty array to store  all the trips object
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      const newTrip = {
        id: uuidv4(),
        title: action.payload.title,
        destination: action.payload.destination,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        budget: action.payload.budget,
        notes: action.payload.notes ||"",
      };
      state.trips.push(newTrip);
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
    },
  }, 
  updateTrip: (state, action) => {
    const { id, updatedData } = action.payload;
    const tripIndex = state.trips.findIndex((trip) => trip.id === id);
    if (tripIndex !== -1) {
      state.trips[tripIndex] = {
        ...state.trips[tripIndex],
        ...updatedData,
      };
    }
  },
});

export const {addTrip,deleteTrip,updateTrip}=tripsSlice.action
export default tripsSlice.reducer;