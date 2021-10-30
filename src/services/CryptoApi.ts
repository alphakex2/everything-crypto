import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  "x-rapidapi-host": import.meta.env.VITE_RAPID__CRYPTO_NEW_API_HOST,
  "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
}

const baseUrl: any = import.meta.env.VITE_RAPID_CRYPTO_BASE_URL

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      //@ts-ignore
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      //@ts-ignore
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      //@ts-ignore
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
    getCryptoExchanges: builder.query({
      //@ts-ignore
      query: () => createRequest("/exchanges")
    })
  }),
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoExchangesQuery
} = cryptoApi
