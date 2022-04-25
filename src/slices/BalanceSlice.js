import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import ApiService from "../api/ApiService";

export const fetchBalance = createAsyncThunk('balance/fetchBalance',
    () => {
        return ApiService.findBalance()
            .then(r => r.data)
    })

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value: 0,
    },
    reducers: {
        updateBalance: (state, action) => {
            state.value = action.payload;
        }
    },
    extraReducers: {
        [fetchBalance.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const {updateBalance} = balanceSlice.actions

export const selectBalance = state => state.balance.value

export default balanceSlice.reducer