import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RestaurantRegistrationRequest, initialValues, testObjType } from "../requests/RestaurantRegistrationRequest";

const registerSlice = createSlice({
    name:"alo",
    initialState:initialValues,
    reducers: {
    submitOnChange: (state:any,action:PayloadAction<RestaurantRegistrationRequest>) =>{
         state.restaurantObject = action.payload;
         

        
    },
    submitTests: (state:any,action:PayloadAction<testObjType>) =>{
        state.testObject = action.payload;
    },
},
})
export default registerSlice.reducer;
export const {submitOnChange,submitTests} = registerSlice.actions;


