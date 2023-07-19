import { IPost } from "../models"
import { makeAutoObservable } from "mobx"
import { getData } from "../api/get"
import { IPromiseBasedObservable, fromPromise } from "mobx-utils"

class PostsStore {
    posts!: IPromiseBasedObservable<IPost[]>
    private urlAPI = "https://jsonplaceholder.typicode.com/posts"

    constructor() {
        makeAutoObservable(this)
    }

    getPostsAction = () => {
        this.posts = fromPromise(getData<IPost[]>(this.urlAPI))
    }
}

export default PostsStore