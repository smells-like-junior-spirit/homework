import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type IPost } from "../model/types";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => "/posts",
            providesTags: ["Posts"],
        }),
        addPost: builder.mutation({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                body: newPost,
            }),
            invalidatesTags:["Posts"],
        })
    })
})

export const {useGetPostsQuery, useAddPostMutation} = postsApi;