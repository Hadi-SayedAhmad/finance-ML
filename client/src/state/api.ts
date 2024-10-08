import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";
export const api = createApi({

    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),

    reducerPath: "main",

    tagTypes: ["kpis", "products", "transactions"],

    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "api/kpis/",
            providesTags: ["kpis"]
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "api/products/",
            providesTags: ["products"]
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "api/transactions/",
            providesTags: ["transactions"]
        })
    })

    

})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;