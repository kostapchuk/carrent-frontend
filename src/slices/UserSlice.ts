import {createSlice} from "@reduxjs/toolkit";
import store from '../store/store'
import {useDispatch} from "react-redux";

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

export type UserDispatch = typeof store.dispatch
export const useUserDispatch = () => useDispatch<UserDispatch>()

export const selectAdmin = state => state.user.admin

export default userSlice.reducer