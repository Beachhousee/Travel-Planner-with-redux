import { configureStore } from '@reduxjs/toolkit';    // it creates a redux store

import { persistStore, persistReducer } from 'redux-persist'; // related to storage


import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';


const persistConfig={
  key : 'root',   // key name is storage
  storage     //it tells to use localStorage
} 

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);