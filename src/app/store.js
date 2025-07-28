import{configureStore} from '@reduxjs/toolkit'


import tripsReducer from  '../features/trips/tripsSlice'


//creating store

export const store=configureStore({
  reducer:{
    trips:tripsReducer
  }
})