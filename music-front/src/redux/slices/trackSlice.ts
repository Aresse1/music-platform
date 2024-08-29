import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name: 'track',
    initialState: {
        track: {},
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