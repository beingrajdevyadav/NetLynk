import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        selectedChat: null,
        chats: [],
    },
    reducers: {
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload;
        },
        setChats: (state, action) => {
            state.chats = action.payload;
        },
        addNewChat: (state, action) => {
            state.chats.push(action.payload);
        },
        clearSelectedChat: (state) => {
            state.selectedChat = null;
        }
    }
});


export const {setSelectedChat, setChats, addNewChat, clearSelectedChat } = chatSlice.actions;
export default chatSlice.reducer;