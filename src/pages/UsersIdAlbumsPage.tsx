import { useParams } from "react-router";
// import usePosts from "../features/PostList/model/hooks/usePosts";
import { useGetAlbumsQuery } from "../entities/albums/api/albumsApi";
import { useSelector } from "react-redux";
// import { selectAllAlbums } from "../entities/users/model/slice/userSlice";
import { selectAlbumsByUserId } from "../entities/users/model/slice/userSlice";
import { type RootState } from "../app/providers/store/store";
import ItemList from "../shared/ui/ItemList/ItemList";

const UsersIdAlbumsPage = () => {

    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    // const { isLoading, albums } = usePosts();
    const { isLoading } = useGetAlbumsQuery();

    // const filteredByUserIdAlbums = albums.filter(album => album.userId === userId);
    // const filteredByUserIdAlbums = useSelector((state) =>
    //     selectAllAlbums(state).filter(album => album.userId === userId));
    const filteredByUserIdAlbums = useSelector((state: RootState) =>
        selectAlbumsByUserId(state, userId));

    if (isLoading) {
        return <div>Идет загрузка...</div>
    }

    return (
        <div>UsersIdPostsPage {id}
            <ItemList items={filteredByUserIdAlbums}></ItemList>
        </div>
    )

}

export default UsersIdAlbumsPage;