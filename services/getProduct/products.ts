import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IProducts } from './products.type';

const baseUrl = `https://fakestoreapi.com/`

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProduct: builder.query<IProducts[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductQuery } = productsApi;