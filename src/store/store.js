import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../slices/BalanceSlice'
import userReducer from "../slices/UserSlice";

export default configureStore({
    reducer: {
        balance: balanceReducer,
        user: userReducer,
    }
})