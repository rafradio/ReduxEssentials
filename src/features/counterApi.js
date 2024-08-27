import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCount = (amount = 1) => {
    return new Promise (resolve =>
      setTimeout(() => resolve({ data: amount }), 500),
    )
}

// export const incrementAsync = createAsyncThunk(
//     "counter/fetchCount",
//     async (amount) => {
//         const response = await fetchCount(amount);
//         console.log("выполняем асинхронное = ", response.data);
//         return response.data;
//     },
//   )