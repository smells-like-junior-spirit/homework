import PostList from '../../widgets/PostList/PostList'
import stylesMain from './MainLayout.module.css'
import { useTheme } from '../lib/theme/useTheme';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const MainLayout = ({ posts }: { posts: Post[] }) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className={`${stylesMain.main} ${theme === 'light' ? stylesMain.light : stylesMain.dark}`}>
                <PostList posts={posts} />
            </div>
        </>
    )
}

export default MainLayout;