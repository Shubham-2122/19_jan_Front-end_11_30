import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get User All
export const userRead = createAsyncThunk(
    'userRead', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        loading: true,
        users: [],
        error: ""
    },
    reducers: {
        userPeding: (state, action) => {
            state.loading = true
        },
        userFullFeild: (state, action) => {
            state.loading = false,
            state.users.push(action.payload)
        },
        userRejected: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        // all get user
        .addCase(userRead.pending,(state)=>{
            state.loading = true
        })
        .addCase(userRead.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(userRead.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { userPeding, userFullFeild, userRejected } = userSlice.actions;

export default userSlice.reducer;