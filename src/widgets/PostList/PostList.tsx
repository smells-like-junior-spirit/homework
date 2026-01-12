import stylesPostList from './PostList.module.css'
import PostCard from "../../entities/post/ui/PostCard";
import { useTheme } from '../../shared/lib/theme/useTheme';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { useState, useMemo } from 'react';
import filterByLength from '../../features/PostLengthFilter/lib/filterByLength';

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

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}


const PostList = ({ posts, comments }: {
    posts: IPost[],
    comments: IComment[]
}) => {

    const { theme } = useTheme() as IThemeContext;

    const [minLength, setMinLength] = useState<number>(0);

    const filteredPosts = useMemo(() => {
        return filterByLength(posts, minLength);
    },[posts, minLength])

    return (
        <div className={stylesPostList.postList}>
            <div className={`${stylesPostList.postList__header} ${theme === 'light' ? stylesPostList.light : stylesPostList.dark}`}>
                <PostLengthFilter setMinLength={setMinLength}></PostLengthFilter>
            </div>

            <div className={stylesPostList.main}>
                {filteredPosts.map((post) => (
                    < PostCard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} comments={comments} />
                ))}
            </div>

        </div >
    )
}

export default PostList;