import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const apiKey = import.meta.env.VITE_NEWS_API

const baseUrl:any = import.meta.env.VITE_NEWS_BASE_URL

const createRequest = (url: string) => ({ url })

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/everything?q=${newsCategory}&sortBy=popularity&apiKey=${apiKey}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;