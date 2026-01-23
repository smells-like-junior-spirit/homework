// import usePosts from "../features/PostList/model/hooks/usePosts";
import { useGetPostsQuery } from '../entities/posts/api/postsApi'
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../entities/posts/model/slice/postSlice';
import ItemList from '../shared/ui/ItemList/ItemList';
import { type RootState } from '../app/providers/store/store';

const PostsPage = () => {

    // const { isLoading, posts } = usePosts();
    // const {data: posts, isLoading} = useGetPostsQuery();
    const { isLoading } = useGetPostsQuery();
    const posts = useSelector((state: RootState) => selectAllPosts(state));

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>Список постов:
            <ItemList items={posts}></ItemList>
        </div>

    )

}

export default PostsPage;