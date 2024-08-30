import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from './counterApi';

const initialState = {
    value: 0,
    status: "idle",
}

// const initialState = {
//     math: {
//         value: 0,
//         status: "idle",
//     },
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log("На любую сумму = ", action.payload);
            state.value += action.payload
        },
    },
        
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
            })
    },
});

export const incrementAsync = createAsyncThunk(
    'counter/fetchByIdStatus',
    async (amount) => {
        const response = await fetchCount(amount);
        console.log("выполняем асинхронное = ", response.data);
        return Number(response.data);
    },
  )

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const selectStatus = (state) => state.counter.status;

export default counterSlice.reducer;