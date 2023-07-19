import PostsStore from "./posts-store"
import TodoStore from "./todo-store"
import CounterStore from "./counter-store"

class RootStore {
    postsStore = new PostsStore()
    todoStore = new TodoStore()
    counterStore = new CounterStore()
}

export default RootStore