import { configureStore } from "@reduxjs/toolkit";
import {navReducer} from './slices/navSlice' ;
import locationReducer from './slices/LocationSlice'

export const store = configureStore({
    reducer: {
      nav: navReducer,
      location: locationReducer,
    },
  });
