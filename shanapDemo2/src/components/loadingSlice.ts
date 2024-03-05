import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type initialType={
    loading:Boolean,
}
const initialValue:initialType = {
    loading :false,
}
const loadingSlice = createSlice({
    name: "loading",
    initialState: initialValue,
    reducers: {
implementLoading:(state:initialType,action:PayloadAction<Boolean>)=>{
            state.loading = action.payload;


}
    }
})
export default loadingSlice.reducer;
export const {implementLoading} = loadingSlice.actions;

