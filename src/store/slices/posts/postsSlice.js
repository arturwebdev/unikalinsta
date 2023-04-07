import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postsAPI'

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: true,
        data: []
    },
    reducers:{
        addComment(state, {payload: {id, body, username}}){
            const idx = state.data.findIndex(comment => comment.id === id)
            state.data[idx].comments.push({
                id: new Date().getTime().toString(),
                body,
                username
            })
        },
        addPost(state,{payload}){
            state.data.unshift(payload)
        },
        removePost(state,{payload}){
            state.data = [...state.data.filter(post => post.id !== payload.id)]
        }
    },
    extraReducers:{
        [fetchPosts.pending]:(state) => {
            state.isLoading = true
        },
        [fetchPosts.fulfilled]: (state,{payload}) => {
            state.isLoading = false
            state.data = [...payload]
        }
    }
})
export const selectPost = state => state.posts

export const {addComment, removePost} = postsSlice.actions

export const postReducer =  postsSlice.reducer