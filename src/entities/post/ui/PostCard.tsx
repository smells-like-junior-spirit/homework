import stylesPostCard from './PostCard.module.css'
import { useTheme } from '../../../shared/lib/theme/useTheme';

const PostCard = ({ userId, title, body }: {
    userId: number,
    title: string,
    body: string,
}) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className={`${stylesPostCard.postCard} ${theme === 'light' ? stylesPostCard.light : stylesPostCard.dark}`}>
                <div className={stylesPostCard.id}>
                    {userId}
                </div>

                <div className={stylesPostCard.postCard__main}>
                    <div className={stylesPostCard.postCard__main__title}>
                        {title}
                    </div>

                    <div className={stylesPostCard.postCard__main__body}>
                        {body}
                    </div>
                </div>
            </div>
        </>
    )
};

export default PostCard;