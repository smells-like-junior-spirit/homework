import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

export const albumsApi = createApi({
    reducerPath: "albumsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    tagTypes: ["Albums"],
    endpoints: (builder) => ({
        getAlbums: builder.query<IAlbum[], void>({
            query: () => "/albums",
            providesTags: ["Albums"],
        }),
        addAlbum: builder.mutation({
            query: (newAlbum) => ({
                url: "/album",
                method: "POST",
                body: newAlbum,
            }),
            invalidatesTags: ["Albums"],
        })
    })
})

export const { useGetAlbumsQuery, useAddAlbumMutation } = albumsApi;