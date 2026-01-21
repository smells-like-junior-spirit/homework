import { useParams } from "react-router";
import usePosts from "../features/PostList/model/hooks/usePosts";
import styles from '../entities/post/ui/PostCard.module.css'
import { useTheme } from "../shared/lib/theme/useTheme";

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const PostsIdPage = () => {

    const { id } = useParams<{ id: string }>();
    const postId = Number(id);

    const { isLoading, posts } = usePosts();
    const filteredByIdPost = posts.filter(post => post.id === postId);

    const { theme } = useTheme() as IThemeContext;

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>Пост с id = {postId}
                <div className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <div className={styles.id}>
                        {filteredByIdPost[0].id}
                    </div>

                    <div className={styles.main}>
                        <div className={styles.postCard__main__post}>
                            <div className={styles.postCard__main__title}>
                                {filteredByIdPost[0].title}
                            </div>

                            <div className={styles.postCard__main__body}>
                                {filteredByIdPost[0].body}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export default PostsIdPage;