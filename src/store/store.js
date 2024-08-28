import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { patitasApi } from "../api/patitasApi";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,


        [patitasApi.reducerPath] : patitasApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(patitasApi.middleware)


})