import { useParams } from "react-router";
import usePosts from "../features/PostList/model/hooks/usePosts";
import styles from '../entities/post/ui/PostCard.module.css'
import { useTheme } from "../shared/lib/theme/useTheme";

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const UsersIdPostsPage = () => {

    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    const { isLoading, posts } = usePosts();
    const filteredByUserIdPosts = posts.filter(post => post.userId === userId);

    const { theme } = useTheme() as IThemeContext;

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>UsersIdPostsPage {id}
            {filteredByUserIdPosts.map((post) =>
                <div key={post.id} className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <div className={styles.id}>
                        {userId}
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

export default UsersIdPostsPage;