import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const patitasApi = createApi({

  reducerPath: 'patitasApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_URL_API,
    prepareHeaders: (headers ) => {
      const token = localStorage.getItem('token');
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');

      if(token) headers.set('Authorization', 'Bearer ' + token);
      
      return headers;
  }
}),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `auth/user`
    }),

    getMascotas: builder.query({
      query: () => `mascotas`
    }),

    getRefugios: builder.query({
      query: () => `refugios`
    })

  }),

})

export const { useGetUserQuery, useGetMascotasQuery, useGetRefugiosQuery } = patitasApi