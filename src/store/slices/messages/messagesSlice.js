import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: 'messages',
    initialState:{
        activeUserId: null,
        allMessages: [],
        currentDialog:[]
    },
    reducers:{
        changeActiveUser(state, {payload:{fromId, toId}}){
            state.activeUserId = toId
            state.currentDialog = [...state.allMessages.filter(message => (
                (message.toId === toId && message.fromId === fromId) ||
                (message.toId === fromId && message.fromId === toId)
            ))]
        },
        addMessage(state, {payload:{fromId, toId, txt}}){
            const message = {
                id: new Date().getTime().toString(),
                fromId,
                toId,
                txt
            }
            state.allMessages.push(message)
            state.currentDialog.push(message)
        },
        removeCurrentDialog(state){
            state.currentDialog = [];
            state.activeUserId = ''
        }
    }
})

export const selectMessages = (state) => state.messages

export const { changeActiveUser, addMessage, removeCurrentDialog } = messagesSlice.actions

export const  messagesReducer = messagesSlice.reducer