import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const baseURL = 'http://localhost:8080';

export const apiSlice = createApi({

    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: builder => ({
        getCategories: builder.query({
            query:()=> '/api/categories',
            providesTags: ['categories']
        }),

        getLabel: builder.query({
            query:()=> '/api/labels',
            providesTags:['transactions']
        }),

        addTransaction:builder.mutation({
            query:(initialTransaction) => ({
                url: '/api/transaction',
                method: 'POST',
                body: initialTransaction,

            }),
            invalidatesTags:['transactions']
        }),

         deleteTransaction:builder.mutation({
                query:recordId => ({
                    url: '/api/transaction',
                    method: 'DELETE',
                    body: recordId,
            }),
            invalidatesTags:['transactions']
        }),
        })
    }) 

export default apiSlice;