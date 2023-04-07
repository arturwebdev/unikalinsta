import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name: 'users',
    initialState:{
        usersData:[],
        currentUser: null
    },
    reducers:{
        login(state, {payload: {email, password}}){
            state.currentUser = state.usersData.find(user => ((user.username === email || user.email === email) && user.password === password)) ?? null
        },
        logOut(state){
            state.currentUser = null
        },
        addPost(state, {payload}){
            const idx = state.usersData.findIndex(user => user.id === state.currentUser.id)

            state.usersData[idx].posts.unshift(payload)
            state.currentUser.posts.unshift(payload)
        },
        removePost(state,{payload}){
            const idx = state.usersData.findIndex(user => user.id === state.currentUser.id)

            state.usersData[idx].posts = [...state.usersData[idx].posts.filter(post => post.id !== payload.id)]
            state.currentUser.posts = [...state.currentUser.posts.filter(post => post.id !== payload.id)]
        }
    },
    extraReducers:{
        [fetchUsers.fulfilled] : (state, {payload})=>{
            state.usersData = [...payload]
        }

    }
})

export const selectUsers = state =>  state.users

export const { login, logOut } = usersSlice.actions

export const usersReducer = usersSlice.reducer