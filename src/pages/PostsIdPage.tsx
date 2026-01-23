import { useParams } from "react-router";
// import usePosts from "../features/PostList/model/hooks/usePosts";
import styles from '../entities/post/ui/PostCard.module.css'
import { useTheme } from "../shared/lib/theme/useTheme";
import { useSelector } from "react-redux";
import { selectPostById } from "../entities/posts/model/slice/postSlice";
import { useGetPostsQuery } from "../entities/posts/api/postsApi";
import { useGetCommentsQuery } from "../entities/comments/api/commentsApi";
import { type RootState } from "../app/providers/store/store";
import { selectCommentsByPostId } from "../entities/posts/model/slice/postSlice";
import ItemList from "../shared/ui/ItemList/ItemList";

const PostsIdPage = () => {

    const { id } = useParams<{ id: string }>();
    const postId = Number(id);

    // const { isLoading, posts } = usePosts();
    // const filteredByIdPost = posts.filter(post => post.id === postId);
    // const {isLoading} = useGetPostsQuery();
    const { isLoading: isPostsLoading } = useGetPostsQuery();
    const { isLoading: isCommentsLoading } = useGetCommentsQuery();
    const isLoading = isPostsLoading && isCommentsLoading;

    const filteredByIdPost = useSelector((state: RootState) => selectPostById(state, postId));

    const comments = useSelector((state: RootState) => selectCommentsByPostId(state, postId));

    const { theme } = useTheme();



    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>Пост с id = {postId}
            <div className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                <div className={styles.id}>
                    {/* {filteredByIdPost[0].id} */}
                    {filteredByIdPost.id}
                </div>

                <div className={styles.main}>
                    <div className={styles.postCard__main__post}>
                        <div className={styles.postCard__main__title}>
                            {/* {filteredByIdPost[0].title} */}
                            {filteredByIdPost.title}
                        </div>

                        <div className={styles.postCard__main__body}>
                            {/* {filteredByIdPost[0].body} */}
                            {filteredByIdPost.body}
                        </div>
                    </div>
                </div>
            </div>
            <div>Комментарии к посту</div>
            <ItemList items={comments}></ItemList>
        </div>
    )

}

export default PostsIdPage;