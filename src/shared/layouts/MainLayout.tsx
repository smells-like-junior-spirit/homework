import PostList from '../../widgets/PostList/PostList'
import stylesMain from './MainLayout.module.css'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const MainLayout = ({ posts }: { posts: Post[] }) => {

    return (
        <>
            <div className={stylesMain.main}>
                <PostList posts={posts} />
            </div>
        </>
    )
}

export default MainLayout;