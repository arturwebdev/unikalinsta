import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState: '',
    reducers: {
        toggleSearch(_, {payload}){
            return payload
        },
        resetSearch(){
            return ''
        }
    }
})
export const selectSearch = (state) => state.search

export const {toggleSearch, resetSearch} = searchSlice.actions

export const searchReduser = searchSlice.reducer