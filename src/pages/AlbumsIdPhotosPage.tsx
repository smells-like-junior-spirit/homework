import { useParams } from "react-router";
import usePosts from "../features/PostList/model/hooks/usePosts";
import styles from '../entities/post/ui/PostCard.module.css'
import { useTheme } from "../shared/lib/theme/useTheme";

type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

const AlbumsIdPhotosPage = () => {

    const { id } = useParams<{ id: string }>();
    const albumId = Number(id);

    const { isLoading, photos } = usePosts();
    const filteredByAlbumIdPhotos = photos.filter(photo => photo.albumId === albumId);

    const { theme } = useTheme() as IThemeContext;

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>AlbumsIdPhotoPage {id}
            {filteredByAlbumIdPhotos.map((photo) =>
                <div key={photo.id} className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <div className={styles.id}>
                        {photo.id}
                    </div>

                    <div className={styles.main}>
                        <div className={styles.postCard__main__post}>
                            <div className={styles.postCard__main__title}>
                                {photo.title}
                            </div>

                            <div className={styles.postCard__main__body}>
                                <a href={photo.url}>{photo.url}</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default AlbumsIdPhotosPage;