import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const headers = {
  "x-rapidapi-host": import.meta.env.VITE_RAPID_BING_HOST,
  "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
}

const baseUrl: any = import.meta.env.VITE_RAPID_BING_NEWS_BASE_URL

const createRequest = (url: string) => ({ url, headers })

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      //@ts-ignore
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
