import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
 name: "nav",
 initialState,
 reducers: {
    setOrigin: (state, action)=>{
        state.origin = action.payload;    // updating a data layer
 
    },
    setDestination: (state, action)=>{
        state.destination =  action.payload;    // updating a data layer

    },
    setTravelTimeInformation: (state, action)=>{
        state.travelTimeInformation=action.payload;    // updating a data layer

    },
 },

});

 // export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions; //pushing data to the layer

  //Selector
  export const selectOrigin = (state) => state.nav.origin;
  export const selectDestination = (state) => state.nav.destination;
  export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice;
export const { reducer: navReducer } = navSlice;
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;






