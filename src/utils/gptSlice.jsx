import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        show : false
    },
    reducers : {
        showGpt : (state,action)=>{
            state.show = !state.show;
        }
    }
})

export const {showGpt} = gptSlice.actions

export default gptSlice.reducer;