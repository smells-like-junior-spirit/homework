import { useParams } from "react-router";
// import usePosts from "../features/PostList/model/hooks/usePosts";
import { useSelector } from "react-redux";
import { selectPostsByUserId } from "../entities/posts/model/slice/postSlice";
import { useGetPostsQuery } from "../entities/posts/api/postsApi";
import { type RootState } from "../app/providers/store/store";
import ItemList from "../shared/ui/ItemList/ItemList";

const UsersIdPostsPage = () => {

    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    // const { isLoading, posts } = usePosts();
    const {isLoading} = useGetPostsQuery();

    // const filteredByUserIdPosts = posts.filter(post => post.userId === userId);
    const filteredByUserIdPosts = useSelector((state : RootState) =>
        selectPostsByUserId(state, userId)
    );

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>UsersIdPostsPage {id}
            <ItemList items={filteredByUserIdPosts}></ItemList>
        </div>
    )

}

export default UsersIdPostsPage;