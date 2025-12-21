import stylesPostCard from './PostCard.module.css'

const PostCard = ({ userId, title, body }: {
    userId: number,
    title: string,
    body: string,
}) => {
    return (
        <>
            <div className={stylesPostCard.postCard}>
                <div className={stylesPostCard.postCard__id}>
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