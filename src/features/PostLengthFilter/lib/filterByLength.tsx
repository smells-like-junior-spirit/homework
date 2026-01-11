interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const filterByLength = (posts: IPost[], minLength: number) => {
    return posts.filter(post => post.title.length >= minLength)
}

export default filterByLength;