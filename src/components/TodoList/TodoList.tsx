import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { ITodo } from "../../models"
import TodoStore from "../../store/todo-store"
import TodoItem from "../TodoItem/TodoItem"

const todoStore = new TodoStore() 

const TodoList = () => {

    const { todos, isLoading, error, getTodosAction, completeTodo, deleteTodo } = todoStore

    useEffect(() => {
        getTodosAction()
    }, [])

    if (isLoading) return <h3>Loading...</h3>
    if (error) return <h3>{error}</h3>

    return (
        <>
            <div>
                {todos.map((todo: ITodo) => {
                    return (
                        <TodoItem
                            key = {todo.id}
                            todo = {todo}
                            completeTodo = {completeTodo}
                            deleteTodo = {deleteTodo}
                        />
                    )
                })}
            </div>
            
        </>
    )
}

export default observer(TodoList)