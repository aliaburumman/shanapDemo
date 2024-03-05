import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type initialType={
    success:Boolean,
    failed:Boolean,
}
const initialValue:initialType = {
    success :false,
    failed:false,
}
const messageSlice = createSlice({
    name: "loading",
    initialState: initialValue,
    reducers: {
implementSuccess:(state:initialType,action:PayloadAction<Boolean>)=>{
            state.success = action.payload;
        },

        implementFailed:(state:initialType,action:PayloadAction<Boolean>)=>{
                    state.failed = action.payload;
        
        
        },
    }
})
export default messageSlice.reducer;
export const {implementSuccess,implementFailed} = messageSlice.actions;

