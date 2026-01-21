import withLoading from "../shared/lib/hoc/withLoading";
import PostList from "../widgets/PostList/PostList";
import usePosts from "../features/PostList/model/hooks/usePosts";

const PostListWithLoading = withLoading(PostList);

const HomePage = () => {

    const { isLoading, posts, comments } = usePosts();

    return (
        <div>HomePage
            <PostListWithLoading isLoading={isLoading} posts={posts} comments={comments}>
            </PostListWithLoading>
        </div>
    )
}

export default HomePage;