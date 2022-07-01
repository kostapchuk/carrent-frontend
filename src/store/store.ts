import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from '../slices/BalanceSlice';
import userReducer from '../slices/UserSlice';

export const store = configureStore({
    reducer: {
        balance: balanceReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
