import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload; 
        },
        clearCurrentUser: (state)=>{
            state.currentUser = null;
        }
    }
});

export default userSlice.reducer;