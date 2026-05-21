import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/Counter/counterSlice";
import  todoSlice from "../features/Todo/todoSlice";

export default configureStore({
    reducer:{
        count : counterSlice,
        todo : todoSlice
    }
})