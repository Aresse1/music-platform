import { configureStore } from "@reduxjs/toolkit";
import { trackReducer } from "./slices/trackSlice";

const store = configureStore({
    reducer: {
        track: trackReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export * from "./slices/trackSlice"
export {store}