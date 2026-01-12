import { useEffect, useState } from 'react';

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface IUsePostsResult {
    isLoading: boolean;
    posts: IPost[];
    comments: IComment[];
    albums: IAlbum[];
    todos: ITodo[];
    photos: IPhoto[];
}

const usePosts = (): IUsePostsResult => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [photos, setPhotos] = useState<IPhoto[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            Promise.all(
                [fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => setPosts(json)),
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(json => setComments(json)),
                fetch('https://jsonplaceholder.typicode.com/albums')
                    .then(response => response.json())
                    .then(json => setAlbums(json)),
                fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.json())
                    .then(json => setTodos(json)),
                fetch('https://jsonplaceholder.typicode.com/photos')
                    .then(response => response.json())
                    .then(json => setPhotos(json))
                ])
                .finally(() => setIsLoading(false))
        }, 1000)
        return () => clearTimeout(timer);
    }, [])

    return ({ isLoading, posts, comments, albums, todos, photos }
    )
}

export default usePosts;