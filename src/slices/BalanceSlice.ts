import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import ApiService from "../api/ApiService";
import {store, RootState} from "../store/store";
import {useDispatch} from "react-redux";

export const fetchBalance = createAsyncThunk('balance/fetchBalance',
    () => {
        return ApiService.findBalance()
            .then((r: any) => r.data)
    })

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value: 0,
    },
    reducers: {
        updateBalance: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBalance.fulfilled, (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        })
    },

})

export const {updateBalance} = balanceSlice.actions

export const selectBalance = (state: RootState) => state.balance.value

export type BalanceDispatch = typeof store.dispatch
export const useBalanceDispatch = () => useDispatch<BalanceDispatch>()

export default balanceSlice.reducer
