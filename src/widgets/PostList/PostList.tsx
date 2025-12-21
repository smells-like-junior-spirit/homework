import stylesPostList from './PostList.module.css'

import PostCard from "../../entities/post/ui/PostCard";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostList = ({ posts }: { posts: Post[] }) => {


    return (
        <div className={stylesPostList.postList}>
            <div className={stylesPostList.postList__header}>
                Список Postlist
            </div>

            <div className={stylesPostList.postList__main}>
                {posts.map((post) => (
                    <PostCard key={post.id} userId={post.userId} title={post.title} body={post.body} />
                ))}
            </div>

        </div >
    )
}

export default PostList;