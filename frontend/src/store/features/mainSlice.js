import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	address: '',
	city: '',
	province: '', 
	country: '',
	postalCode: ''
};

const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
    updateInput: (state, action) => {
      const type = action.payload.type;
      state[type] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    /*
    builder.addCase(signIn.pending, (state) => {

    },
    builder.addCase(signIn.fulfilled, (state) => {

    },
    builder.addCase(signIn.rejected, (state) => {

    },
  */
  },
 });

export const { updateInput } = mainSlice.actions;

export default mainSlice.reducer;

