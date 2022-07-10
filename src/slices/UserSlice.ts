import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { RootState, store } from '../store/store';
import LocalStorage from '../storage/LocalStorage';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: LocalStorage.getLoggedIn().length !== 0,
        admin: LocalStorage.getAdmin().length !== 0,
    },
    reducers: {
        updateLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
            if (action.payload) {
                LocalStorage.setLoggedIn('yes');
            } else {
                LocalStorage.setLoggedIn('');
            }
        },
        updateAdmin: (state, action) => {
            state.admin = action.payload;
            if (action.payload) {
                LocalStorage.setLoggedIn('yes');
            } else {
                LocalStorage.setLoggedIn('');
            }
        },
    },
});

export const { updateLoggedIn, updateAdmin } = userSlice.actions;

export const selectLoggedIn = (state: RootState) => state.user.loggedIn;

export type UserDispatch = typeof store.dispatch;
export const useUserDispatch = () => useDispatch<UserDispatch>();

export const selectAdmin = (state: RootState) => state.user.admin;

export default userSlice.reducer;
