import stylesPostCard from './PostCard.module.css'
import { useTheme } from '../../../shared/lib/theme/useTheme';
import Button from '../../../shared/ui/Button/Button'
import { useCallback, useState } from 'react';
import { useMemo } from 'react';
import CommentList from '../../../widgets/CommentList/ui/CommentList';


type Theme = 'light' | 'dark';

interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

interface IComments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const PostCard = ({ userId, id, title, body, comments }: {
    userId: number,
    id: number,
    title: string,
    body: string,
    comments: IComments[],
}) => {

    const { theme } = useTheme() as IThemeContext;

    const postComments = useMemo(() => {
        return comments.filter((comment) => comment.postId === id)
    }, [comments])

    const [isVisibleComments, setIsVisibleComment] = useState<boolean>(true);

    const toggleVisibleComments = useCallback(() => {
        setIsVisibleComment(prev => !prev);
    }, [])


    return (
            <div className={`${stylesPostCard.postCard} ${theme === 'light' ? stylesPostCard.light : stylesPostCard.dark}`}>
                <div className={stylesPostCard.id}>
                    {userId}
                </div>

                <div className={stylesPostCard.main}>
                    <div className={stylesPostCard.postCard__main__post}>
                        <div className={stylesPostCard.postCard__main__title}>
                            {title}
                        </div>

                        <div className={stylesPostCard.postCard__main__body}>
                            {body}
                        </div>
                        <Button
                            onClickHandler={toggleVisibleComments}
                            value={isVisibleComments ? `Свернуть комментарии (${postComments.length})` : `Развернуть комментарии (${postComments.length})`}
                            variant={theme === 'light' ? 'light' : 'dark'}>
                        </Button>
                    </div>
                    {isVisibleComments && <CommentList postComments={postComments}></CommentList>}
                </div>
            </div >
    )
};

export default PostCard;