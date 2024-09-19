import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const patitasApi = createApi({

  reducerPath: 'patitasApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_URL_API,
    prepareHeaders: (headers ) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      
      return headers;
  }
}),
  endpoints: (builder) => ({

    getMascotas: builder.query({
      query: () => `mascotas`
    }),

    getRefugios: builder.query({
      query: () => `refugios`
    })

  }),

})

export const { useGetUserQuery, useGetMascotasQuery, useGetRefugiosQuery } = patitasApi