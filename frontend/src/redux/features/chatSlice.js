import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem("chatInfo"));
const initialState = {
    chats: localData ? localData : null,
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        seChats: (state, action) => {
            localStorage.setItem("chatInfo", JSON.stringify(action.payload));
            state.chats = action.payload;
        },
        clearCurrentChat: (state) => {
            state.currentChat = null;
            localStorage.removeItem("chatInfo");
        }
    }
});


export const { setCurrentChat, clearCurrentChat } = chatSlice.actions;
export default chatSlice.reducer;