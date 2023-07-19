import { memo } from 'react'
import { ITodo } from '../../models'

interface TodoItemProps {
    todo: ITodo;
    completeTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, completeTodo, deleteTodo }: TodoItemProps) => {
    return (
        <>
            <div>
                <h3>{todo.title}. {todo.completed ? "true" : "false"}</h3>
                <button onClick = {() => completeTodo(todo.id)}>compelte</button>
                <button onClick = {() => deleteTodo(todo.id)}>delete</button>
            </div>
        </>
    )
}

export default memo(TodoItem)