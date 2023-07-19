import { ITodo, CastError } from "../models"
import { makeAutoObservable, runInAction } from "mobx"
import { getData } from "../api/get"

class TodoStore {
    todos: ITodo[] = []
    isLoading = false
    error = ""
    private urlAPI = "https://jsonplaceholder.typicode.com/todos"

    constructor() {
        makeAutoObservable(this)
    }

    getTodosAction = async () => {
        try {
            this.isLoading = true
            const res = await getData<ITodo[]>(this.urlAPI)
            runInAction(() => {
                this.todos = res
                this.isLoading = false
                this.error = ""
            })
        } catch (e: unknown) {
            const err = e as CastError
            this.error = err.message
            this.isLoading = false
        }
    }

    addTodo = (todo: ITodo) => {
        this.todos.push(todo)
    }

    completeTodo = (id: number) => {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    deleteTodo = (id: number) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
}

export default TodoStore