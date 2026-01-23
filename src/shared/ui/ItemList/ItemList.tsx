import styles from '../../../entities/post/ui/PostCard.module.css'
import { useTheme } from '../../lib/theme/useTheme';
import { type IThemeContext } from '../../lib/theme/useTheme';

interface BaseItem {
    userId?: number;
    postId?: number;
    albumId?: number;
    id: number;
    title?: string;
    body?: string;
    name?: string;
    email?: string;
    completed?: boolean;
    url?: string;
}

type ItemListProps<T> = {
    items: T[]
}

const ItemList = <T extends BaseItem>({ items }: ItemListProps<T>) => {

    const { theme } = useTheme() as IThemeContext;

    return (
        <>
            {
                items.map((item) =>
                    <div key={item.id} className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                        <div className={styles.id}>
                            {item.id}
                        </div>

                        <div className={styles.main}>
                            <div className={styles.postCard__main__post}>
                                <div className={styles.postCard__main__title}>
                                    {item.title}
                                </div>

                                <div className={styles.postCard__main__body}>
                                    {item.body && <div>{item.body}</div>}
                                    {item.url && <a href={item.url}>{item.url}</a>}
                                    {item.completed !== undefined && (
                                        <div>
                                            Status : {item.completed ? <strong>completed</strong> : `incompleted`}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )

}

export default ItemList;