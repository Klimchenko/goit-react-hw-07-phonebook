import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627fc6debe1ccb0a4664b2ae.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContactsByName: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query(newContact) {
        return {
          url: `/contacts`,
          method: 'POST',
          body: newContact,
        };
      },
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsByNameQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
