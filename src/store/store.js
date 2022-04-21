import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../slices/BalanceSlice'
import loggedInReducer from "../slices/LoggedInSlice";

export default configureStore({
    reducer: {
        balance: balanceReducer,
        loggedIn: loggedInReducer,
    }
})