import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    tagTypes: ["Comments"],
    endpoints: (builder) => ({
        getComments: builder.query<IComment[], void>({
            query: () => "/comments",
            providesTags: ["Comments"],
        }),
        addComment: builder.mutation({
            query: (newComment) => ({
                url: "/comment",
                method: "POST",
                body: newComment,
            }),
            invalidatesTags: ["Comments"],
        })
    })
})

export const { useGetCommentsQuery, useAddCommentMutation } = commentsApi;