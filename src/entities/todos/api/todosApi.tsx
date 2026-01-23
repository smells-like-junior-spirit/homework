import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const todosApi = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query<ITodo[], void>({
            query: () => "/todos",
            providesTags: ["Todos"],
        }),
        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: "/todo",
                method: "POST",
                body: newTodo,
            }),
            invalidatesTags: ["Todos"],
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation } = todosApi;