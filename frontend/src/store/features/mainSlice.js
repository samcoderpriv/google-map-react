import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const search = createAsyncThunk(
  "main/search",
  async (arg, { getState }) => {
    const { main } = getState();
    const { address, city, province, country, postalCode } = main;
    const response = await axios.get(`http://localhost:9000/api/search`,{ 
    	params: {
    		address, 
    		city, 
    		province, 
    		country, 
    		postalCode
    }});
    return response;
  }
);


const initialState = {
	address: '',
	city: '',
	province: '', 
	country: '',
	postalCode: '',
	result:null,
};

const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
    updateInput: (state, action) => {
      const type = action.payload.type;
      state[type] = action.payload.value;
    },
    goBack: (state, action) =>{
    	state.result = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(search.pending, (state) => {
    	state.result = null;
    });
    builder.addCase(search.fulfilled, (state,action) => {
    	state.result = action.payload.data.data[0];
    });
    builder.addCase(search.rejected, (state,action) => {
    	state.result = null;
    });
   }, 
 });

export const { updateInput, goBack } = mainSlice.actions;

export default mainSlice.reducer;

