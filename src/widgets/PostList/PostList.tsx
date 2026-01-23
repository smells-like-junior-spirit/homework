import stylesPostList from './PostList.module.css'
import PostCard from "../../entities/post/ui/PostCard";
import { useTheme } from '../../shared/lib/theme/useTheme';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { useState, useMemo } from 'react';
import filterByLength from '../../features/PostLengthFilter/lib/filterByLength';
import {type IPost} from '../../entities/posts/model/types';
import { type IComment } from '../../entities/comments/model/types';

interface PostListProps {
    posts: IPost[],
    comments: IComment[]
}

const PostList = ({ posts, comments }: PostListProps) => {

    const { theme } = useTheme();

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