import { createSlice } from "@reduxjs/toolkit";
import { Itrack } from "../../types";


const trackSlice = createSlice({
    name: 'track',
    initialState:{
        track: {} as Itrack
    },
    reducers: {
        setTrack: (state, action) => {
            state.track = action.payload;
        }
        
    },
})


export const {
    reducer: trackReducer,
    actions: trackActions,
} = trackSlice