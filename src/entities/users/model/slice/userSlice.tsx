import { createEntityAdapter, createSlice, createSelector } from "@reduxjs/toolkit";
import { albumsApi } from "../../../albums/api/albumsApi";
import { todosApi } from "../../../todos/api/todosApi";
import { type IAlbum } from "../../../albums/model/types";
import { type ITodo } from "../../../todos/model/types";
import { type RootState } from "../../../../app/providers/store/store";

const albumsAdapter = createEntityAdapter<IAlbum>();
const todosAdapter = createEntityAdapter<ITodo>();

const usersSlice = createSlice({
    name: "users",
    initialState: {
        albums: albumsAdapter.getInitialState({ status: "idle" }),
        todos: todosAdapter.getInitialState({ status: "idle" }),
    },
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addMatcher(albumsApi.endpoints.getAlbums.matchFulfilled, (state, action) => {
            albumsAdapter.setAll(state.albums, action.payload)
        });
        builder.addMatcher(todosApi.endpoints.getTodos.matchFulfilled, (state, action) => {
            todosAdapter.setAll(state.todos, action.payload)
        });
    }
    });

export default usersSlice.reducer;

export const {
    selectAll: selectAllAlbums,
    selectById: selectAlbumById
} = albumsAdapter.getSelectors((state : RootState) => state.users.albums);

export const {
    selectAll: selectAllTodos,
    selectById: selectTodosById
} = todosAdapter.getSelectors((state : RootState) => state.users.todos);

export const selectAlbumsByUserId = createSelector(
    [
        selectAllAlbums,
        (_state, userId) => userId
    ],
    (albums, userId) => albums.filter(album => album.userId === userId)
);

export const selectTodosByUserId = createSelector(
    [
        selectAllTodos,
        (_state, userId) => userId
    ],
    (todos, userId) => todos.filter(todos => todos.userId === userId)
);