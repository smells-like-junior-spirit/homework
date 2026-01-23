import { useParams } from "react-router";
// import usePosts from "../features/PostList/model/hooks/usePosts";
import styles from '../entities/post/ui/PostCard.module.css'
import { useTheme } from "../shared/lib/theme/useTheme";
import { useSelector } from "react-redux";
// import { selectAllTodos } from "../entities/users/model/slice/userSlice";
import { useGetTodosQuery } from "../entities/todos/api/todosApi";
import { selectTodosByUserId } from "../entities/users/model/slice/userSlice";
import { type RootState } from "../app/providers/store/store";

const UsersIdTodosPage = () => {

    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    // const { isLoading, todos } = usePosts();
    const { isLoading } = useGetTodosQuery();

    // const filteredByUserIdTodos = todos.filter(todo => todo.userId === userId);
    // const filteredByUserIdTodos = useSelector((state) =>
    //     selectAllTodos(state).filter(todo => todo.userId === userId));
    const filteredByUserIdTodos = useSelector((state : RootState) =>
        selectTodosByUserId(state, userId));

    const { theme } = useTheme();

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>UsersIdPostsPage {id}
            {filteredByUserIdTodos.map((todo) =>
                <div key={todo.id} className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <div className={styles.id}>
                        {todo.id}
                    </div>

                    <div className={styles.main}>
                        <div className={styles.postCard__main__post}>
                            <div className={styles.postCard__main__title}>
                                {todo.title}
                            </div>

                            <div className={styles.postCard__main__body}>
                                Status: {todo.completed ? <strong>completed</strong> : `incompleted`}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default UsersIdTodosPage;