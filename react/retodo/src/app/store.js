import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/Counter/counterSlice";

export default configureStore({
    reducer:{
        count : counterSlice
    }
})