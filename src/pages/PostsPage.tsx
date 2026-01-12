import usePosts from "../features/PostList/model/hooks/usePosts";
import styles from '../entities/post/ui/PostCard.module.css'
import { useTheme } from "../shared/lib/theme/useTheme";

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const PostsPage = () => {

    const { isLoading, posts } = usePosts();

    const { theme } = useTheme() as IThemeContext;

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>Список постов: 
            {posts.map((post) =>
                <div key={post.id} className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <div className={styles.id}>
                        {post.id}
                    </div>

                    <div className={styles.main}>
                        <div className={styles.postCard__main__post}>
                            <div className={styles.postCard__main__title}>
                                {post.title}
                            </div>

                            <div className={styles.postCard__main__body}>
                                {post.body}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default PostsPage;