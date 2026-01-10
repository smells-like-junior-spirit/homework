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

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const PostListWithLoading = withLoading(PostList);
// { posts }: { posts: IPost[] }

const MainLayout = () => {

    const { theme } = useTheme() as IThemeContext;

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    setPosts(json);
                    setIsLoading(false);
                })
        }, 5000)
        return () => clearTimeout(timer);
    }, [])



    // console.log(typeof posts2);

    return (
        <>
            <div className={`${stylesMain.main} ${theme === 'light' ? stylesMain.light : stylesMain.dark}`}>
                <PostListWithLoading isLoading={isLoading} posts={posts}></PostListWithLoading>
                {/* <PostList posts={posts} /> */}
            </div>
        </>
    )
}

export default MainLayout;