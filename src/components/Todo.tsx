import { type TodoId, type Todo as TodoType } from "../Types";

interface Props extends TodoType {
    onRemoveTodo: ({id}: TodoId) => void
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompletedTodo}) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompletedTodo({
            id, 
            completed: event.target.checked})
        //React.ChangeEvent<HTMLInputElement>
    }

    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className="destroy" 
                onClick={() => 
                onRemoveTodo({id})
            }></button>
        </div>
    )
}