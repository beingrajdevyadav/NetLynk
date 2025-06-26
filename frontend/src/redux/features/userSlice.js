import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem("userInfo"));
// console.log(localData);

const initialState = {
    currentUser: localData ? localData : null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        }
    }
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;