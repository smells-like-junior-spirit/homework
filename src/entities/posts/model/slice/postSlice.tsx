import { createEntityAdapter, createSlice, createSelector } from "@reduxjs/toolkit";
import { postsApi } from "../../api/postsApi";
import { commentsApi } from "../../../comments/api/commentsApi";
import { type IPost } from "../types";
import { type IComment } from "../../../comments/model/types";
import { type RootState } from '../../../../app/providers/store/store'

const postsAdapter = createEntityAdapter<IPost>();
const commentsAdapter = createEntityAdapter<IComment>();

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: postsAdapter.getInitialState({ status: "idle" }),
        comments: commentsAdapter.getInitialState({ status: "idle" }),
    },
    reducers: {
        postsReceived: (state, action) => {
            postsAdapter.setAll(state.items, action.payload)
        },
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
} = postsAdapter.getSelectors((state : RootState) => state.posts.items);


export const {
    selectAll: selectAllComments,
    selectById: selectCommentById
} = commentsAdapter.getSelectors((state : RootState) => state.posts.comments);

export const selectPostsByUserId = createSelector(
    [
        selectAllPosts,
        (_state : RootState, userId : number) => userId
    ],
    (posts, userId) => posts.filter(post => post.userId === userId)
);
export const selectCommentsByPostId = createSelector(
    [
        selectAllComments,
        (_state : RootState, postId : number) => postId
    ],
    (comments, postId) => comments.filter(comment => comment.postId === postId)
);