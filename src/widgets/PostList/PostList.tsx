import stylesPostList from './PostList.module.css'
import PostCard from "../../entities/post/ui/PostCard";
import { useTheme } from '../../shared/lib/theme/useTheme';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Theme = 'light' | 'dark';

interface IntThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}


const PostList = ({ posts }: { posts: Post[] }) => {

    const { theme } = useTheme() as IntThemeContext;

    return (
        <div className={stylesPostList.postList}>
            <div className={`${stylesPostList.postList__header} ${theme === 'light' ? stylesPostList.light : stylesPostList.dark}`}>
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