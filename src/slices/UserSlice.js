import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        admin: false,
    },
    reducers: {
        updateLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        },
        updateAdmin: (state, action) => {
            state.admin = action.payload
        },
    },
})

export const {updateLoggedIn, updateAdmin} = userSlice.actions

export const selectLoggedIn = state => state.user.loggedIn

export const selectAdmin = state => state.user.admin

export default userSlice.reducer