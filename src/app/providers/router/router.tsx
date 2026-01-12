import { createBrowserRouter } from "react-router";
import App from "../../App";
import PostsPage from "../../../pages/PostsPage";
import HomePage from "../../../pages/HomePage";
import PostsIdPage from '../../../pages/PostsIdPage';
import UsersIdAlbumsPage from "../../../pages/UsersIdAlbumsPage";
import UsersIdTodosPage from "../../../pages/UsersIdTodosPage";
import UsersIdPostsPage from "../../../pages/UsersIdPostsPage";
import AlbumsIdPhotosPage from "../../../pages/AlbumsIdPhotosPage";
import UserLayoutWithTabs from "../../../shared/layouts/UserLayoutWithTabs";


const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "posts",
                children: [
                    {
                        index: true,
                        Component: PostsPage,
                    },
                    {
                        path: ":id",
                        Component: PostsIdPage,
                    }
                ]
            },
            {
                path: "users/:id",
                Component: UserLayoutWithTabs,
                children: [
                    {
                        path: "albums",
                        Component: UsersIdAlbumsPage,
                    },
                    {
                        path: "todos",
                        Component: UsersIdTodosPage,
                    },
                    {
                        path: "posts",
                        Component: UsersIdPostsPage,
                    }
                ]
            },
            {
                path: "albums/:id/photos",
                Component: AlbumsIdPhotosPage,
            }
        ]
    }
])

export default routes;