import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../slices/BalanceSlice'

export default configureStore({
    reducer: {
        balance: balanceReducer
    }
})