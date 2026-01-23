import { type IPost } from "../../../entities/posts/model/types";

const filterByLength = (posts: IPost[], minLength: number) => {
    return posts.filter(post => post.title.length >= minLength)
}

export default filterByLength;