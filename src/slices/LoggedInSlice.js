import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ApiService from "../api/ApiService";

export const login = createAsyncThunk('loggedIn/login',
    (_, {credentials}) => {
        return ApiService.login(credentials)
            .then(r => r.data)
    })

export const loggedInSlice = createSlice({
    name: 'loggedIn',
    initialState: {
        value: false,
    },
    reducers: {
        updateLoggedIn: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const {updateLoggedIn} = loggedInSlice.actions

export const selectLoggedIn = state => state.loggedIn.value

export default loggedInSlice.reducer