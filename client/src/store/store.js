import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import expenseSlice from './reducer.js';
import { apiSlice } from './apiSlice.js'


export const store = configureStore ({
    reducer: {
        expense: expenseSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:getDefaultMiddleware =>getDefaultMiddleware().concat(apiSlice.middleware)


})

