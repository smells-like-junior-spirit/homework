import PostList from '../../widgets/PostList/PostList'
import stylesMain from './MainLayout.module.css'
import { useTheme } from '../lib/theme/useTheme';
import withLoading from '../lib/hoc/withLoading'
import { useEffect, useState } from 'react';

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IComments {
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

const PostListWithLoading = withLoading(PostList);

const MainLayout = () => {

    const { theme } = useTheme() as IThemeContext;

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComments[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            Promise.all(
                [fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => setPosts(json)),
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(json => setComments(json))
                ])
                .finally(() => setIsLoading(false))
        }, 5000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className={`${stylesMain.main} ${theme === 'light' ? stylesMain.light : stylesMain.dark}`}>
                <PostListWithLoading isLoading={isLoading} posts={posts} comments={comments}>
                </PostListWithLoading>
            </div>
        </>
    )
}

export default MainLayout;