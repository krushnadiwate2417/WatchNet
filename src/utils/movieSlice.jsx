import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlaying : null,
        popular : null,
        topRated : null,
        upcoming : null,
        trailerVideo : null,
        tvTopRated : null,
        tvPopular : null,
        tvAir : null
    },
    reducers : {
        addNowPlaying : (state,action)=>{
            state.nowPlaying = action.payload;
        },
        addPopular : (state,action)=>{
            state.popular = action.payload;
        },
        addTopRated : (state,action)=>{
            state.topRated = action.payload;
        },
        addUpcoming : (state,action)=>{
            state.upcoming = action.payload;
        },
        addTrailer : (state,action)=>{
            state.trailerVideo = action.payload
        },
        addTvTopRated : (state,action)=>{
            state.tvTopRated = action.payload
        },
        addTvPopular : (state,action)=>{
            state.tvPopular = action.payload
        },
        addTvAir : (state,action)=>{
            state.tvAir = action.payload
        }
    }
})

export const {addNowPlaying ,addTrailer,addPopular,addTopRated,addUpcoming,addTvTopRated,addTvAir,addTvPopular} = movieSlice.actions
export default movieSlice.reducer;