import { climaReducer, } from "./sliceReducers/climaSlice";

import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer:{
       clima:climaReducer
    },

   
})