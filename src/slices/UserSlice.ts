import {createSlice} from "@reduxjs/toolkit";
import {RootState, store} from '../store/store'
import {useDispatch} from "react-redux";
import LocalStorage from "../storage/LocalStorage";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: LocalStorage.getLoggedIn().length !== 0,
        admin: LocalStorage.getAdmin().length !== 0,
    },
    reducers: {
        updateLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
            action.payload ? LocalStorage.setLoggedIn("yes") : LocalStorage.setLoggedIn("");
        },
        updateAdmin: (state, action) => {
            state.admin = action.payload;
            action.payload ? LocalStorage.setAdmin("yes") : LocalStorage.setAdmin("");
        },
    },
})

export const {updateLoggedIn, updateAdmin} = userSlice.actions

export const selectLoggedIn = (state: RootState) => state.user.loggedIn

export type UserDispatch = typeof store.dispatch
export const useUserDispatch = () => useDispatch<UserDispatch>()

export const selectAdmin = (state: RootState) => state.user.admin

export default userSlice.reducer
