import { combineReducers } from '@reduxjs/toolkit';



import tripsReducer from '../features/trips/tripsSlice';
import uiReducer from '../features/ui/uiSlice';


const rootReducer=combineReducers({
  trips:tripsReducer,
  ui:uiReducer
})

  
export default rootReducer;