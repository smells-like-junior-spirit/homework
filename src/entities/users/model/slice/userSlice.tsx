import { createEntityAdapter, createSlice, createSelector } from "@reduxjs/toolkit";
import { albumsApi } from "../../../albums/api/albumsApi";
import { todosApi } from "../../../todos/api/todosApi";

interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const albumsAdapter = createEntityAdapter<IAlbum>();
const todosAdapter = createEntityAdapter<ITodo>();

const usersSlice = createSlice({
    name: "users",
    initialState: {
        albums: albumsAdapter.getInitialState({ status: "idle" }),
        todos: todosAdapter.getInitialState({ status: "idle" }),
    },
    reducers: {
        // usersReceived: usersAdapter.setAll,
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

// export const { usersReceived } = usersSlice.actions;
export default usersSlice.reducer;

export const {
    selectAll: selectAllAlbums,
    selectById: selectAlbumById
} = albumsAdapter.getSelectors((state) => state.users.albums);

export const {
    selectAll: selectAllTodos,
    selectById: selectTodosById
} = todosAdapter.getSelectors((state) => state.users.todos);



export const selectAlbumsByUserId = createSelector(
    [
        selectAllAlbums,
        (state, userId) => userId
    ],
    (albums, userId) => albums.filter(album => album.userId === userId)
);

export const selectTodosByUserId = createSelector(
    [
        selectAllTodos,
        (state, userId) => userId
    ],
    (todos, userId) => todos.filter(todos => todos.userId === userId)
);