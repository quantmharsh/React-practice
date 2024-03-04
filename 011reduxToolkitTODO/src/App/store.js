import {configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';
//configureStore also requires object
export const store= configureStore({
    reducer:todoReducer
});