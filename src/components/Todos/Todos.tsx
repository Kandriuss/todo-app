import { type ListOfTodos, type TodoId, type Todo as TodoType } from "../../Types.d";
import { Todo } from "../Todo";

interface Props {
    onRemoveTodo: (id: TodoId) => void
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    todos: ListOfTodos
}

export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompletedTodo}) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li 
                    key={todo.id}
                    className={`${todo.completed} ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompletedTodo={onToggleCompletedTodo}
                    />
                </li>
            ))} 
        </ul>
    )
}