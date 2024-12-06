import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeLocation: null,
  workLocation: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setHomeLocation: (state, action) => {
      state.homeLocation = action.payload;
    },
    setWorkLocation: (state, action) =>{
      state.workLocation = action.payload;
    }
  },
});

export const { setHomeLocation, setWorkLocation } = locationSlice.actions;

export default locationSlice.reducer;