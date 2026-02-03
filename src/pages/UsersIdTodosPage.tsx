import { useParams } from "react-router";
// import usePosts from "../features/PostList/model/hooks/usePosts";
import { useSelector } from "react-redux";
// import { selectAllTodos } from "../entities/users/model/slice/userSlice";
import { useGetTodosQuery } from "../entities/todos/api/todosApi";
import { selectTodosByUserId } from "../entities/users/model/slice/userSlice";
import { type RootState } from "../app/providers/store/store";
import ItemList from '../shared/ui/ItemList/ItemList'

const UsersIdTodosPage = () => {

    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    // const { isLoading, todos } = usePosts();
    const { isLoading } = useGetTodosQuery();

    // const filteredByUserIdTodos = todos.filter(todo => todo.userId === userId);
    // const filteredByUserIdTodos = useSelector((state) =>
    //     selectAllTodos(state).filter(todo => todo.userId === userId));
    const filteredByUserIdTodos = useSelector((state: RootState) =>
        selectTodosByUserId(state, userId));

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>UsersIdPostsPage {id}
            <ItemList items={filteredByUserIdTodos}></ItemList>
        </div>
    )

}

export default UsersIdTodosPage;