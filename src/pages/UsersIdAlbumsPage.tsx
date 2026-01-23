import { useParams } from "react-router";
// import usePosts from "../features/PostList/model/hooks/usePosts";
import styles from '../entities/post/ui/PostCard.module.css'
import { useTheme } from "../shared/lib/theme/useTheme";
import { useGetAlbumsQuery } from "../entities/albums/api/albumsApi";
import { useSelector } from "react-redux";
// import { selectAllAlbums } from "../entities/users/model/slice/userSlice";
import { selectAlbumsByUserId } from "../entities/users/model/slice/userSlice";

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const UsersIdAlbumsPage = () => {

    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    // const { isLoading, albums } = usePosts();
    const { isLoading } = useGetAlbumsQuery();

    // const filteredByUserIdAlbums = albums.filter(album => album.userId === userId);
    // const filteredByUserIdAlbums = useSelector((state) =>
    //     selectAllAlbums(state).filter(album => album.userId === userId));
    const filteredByUserIdAlbums = useSelector((state) =>
        selectAlbumsByUserId(state, userId));

    const { theme } = useTheme() as IThemeContext;

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>UsersIdPostsPage {id}
            {filteredByUserIdAlbums.map((album) =>
                <div key={album.id} className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <div className={styles.id}>
                        {album.id}
                    </div>

                    <div className={styles.main}>
                        <div className={styles.postCard__main__post}>
                            <div className={styles.postCard__main__title}>
                                {album.title}
                            </div>

                            {/* <div className={styles.postCard__main__body}>
                                {post.body}
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default UsersIdAlbumsPage;