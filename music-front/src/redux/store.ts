import { configureStore } from "@reduxjs/toolkit";
import { trackReducer } from "./slices/trackSlice";

const store = configureStore({
    reducer: {
        track: trackReducer
    }
})

export * from "./slices/trackSlice"
export {store}