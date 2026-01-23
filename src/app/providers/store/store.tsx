import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/posts/api/postsApi";
import { commentsApi } from "../../../entities/comments/api/commentsApi";
import { albumsApi } from "../../../entities/albums/api/albumsApi";
import { todosApi } from "../../../entities/todos/api/todosApi";
import postsReducer from '../../../entities/posts/model/slice/postSlice'
import usersReducer from '../../../entities/users/model/slice/userSlice'

export const store = configureStore( {
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        [postsApi.reducerPath] : postsApi.reducer,
        [commentsApi.reducerPath] : commentsApi.reducer,
        [albumsApi.reducerPath] : albumsApi.reducer,
        [todosApi.reducerPath] : todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            postsApi.middleware,
            commentsApi.middleware,
            albumsApi.middleware,
            todosApi.middleware
        ),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;