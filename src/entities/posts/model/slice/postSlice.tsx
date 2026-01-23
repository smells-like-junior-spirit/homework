import { createEntityAdapter, createSlice, createSelector } from "@reduxjs/toolkit";
import { postsApi } from "../../api/postsApi";
import { commentsApi } from "../../../comments/api/commentsApi";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
const postsAdapter = createEntityAdapter<IPost>();
const commentsAdapter = createEntityAdapter<IComment>();

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: postsAdapter.getInitialState({ status: "idle" }),
        comments: commentsAdapter.getInitialState({ status: "idle" }),
    },
    reducers: {
        postsReceived: (state, action) =>
            postsAdapter.setAll(state.items, action.payload),
    },
    extraReducers: (builder) => {
        builder.addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
            postsAdapter.setAll(state.items, action.payload)
        });
        builder.addMatcher(commentsApi.endpoints.getComments.matchFulfilled, (state, action) => {
            commentsAdapter.setAll(state.comments, action.payload)
        });
    }
})

export const { postsReceived } = postsSlice.actions;
export default postsSlice.reducer;

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById
} = postsAdapter.getSelectors((state) => state.posts.items);


export const {
    selectAll: selectAllComments,
    selectById: selectCommentById
} = commentsAdapter.getSelectors((state) => state.posts.comments);

export const selectPostsByUserId = createSelector(
    [
        selectAllPosts,
        (state, userId) => userId
    ],
    (posts, userId) => posts.filter(post => post.userId === userId)
);
export const selectCommentsByPostId = createSelector(
    [
        selectAllComments,
        (state, postId) => postId
    ],
    (comments, postId) => comments.filter(comment => comment.postId === postId)
);