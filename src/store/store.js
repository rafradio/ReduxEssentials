import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from "../features/mainSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: counterReducer,
    },
});