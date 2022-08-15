import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  currentVideo : null,
  loading : false,
  erro : false,
};

export const videoSlice = createSlice({
  name: 'video',
 initialState,
  reducers: {
      fetchStart:(state)=>{
        state.loading=false;
      },
      fetchSuccess:(state,action)=>{
        state.loading=false;
        state.currentVideo = action.payload;
      },
      fetchFailure:(state)=>{
        state.loading=false;
        state.error = true;
      },
     
  },
})

export const { fetchStart,  fetchSuccess ,fetchFailure } = videoSlice.actions

export default videoSlice.reducer;