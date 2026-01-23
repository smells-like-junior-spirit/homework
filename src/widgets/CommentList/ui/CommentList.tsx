import styles from './CommentList.module.css'
import { memo } from 'react';
import { type IComment } from '../../../entities/comments/model/types';

interface CommentListProps {
    postComments: IComment[]
}

const CommentList = memo(({ postComments }: CommentListProps) => {

    return (
        <>
            {postComments.map(comment => (

                <div key={comment.id} className={styles.comment}>
                    <div className={styles.id}>
                        {comment.id}
                    </div>
                    <div className={styles.main__post}>
                        <div className={styles.main__title}>
                            {comment.name}
                        </div>
                        <div className={styles.main__body}>
                            {comment.body}
                        </div>
                        <div className={styles.main__body}>
                            {comment.email}
                        </div>

                    </div>
                </div>
            ))
            }
        </>
    )
});

export default CommentList;