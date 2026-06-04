import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "../Slices/userSlice";
import { adminApi } from "../Slices/adminApi";

export const store = configureStore({
    reducer:{
        user : userSlice,
        [adminApi.reducerPath] : adminApi.reducer
    },
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(adminApi.middleware)
})