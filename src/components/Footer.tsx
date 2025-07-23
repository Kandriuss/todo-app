import type { FilterValue } from "../Types"
import { Filters } from "./Filter"

interface Props {
    onClearCompleted: () => void;
    activeCount: number;
    completedCount: number;
    filterSelected: FilterValue;
    onFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0, 
    filterSelected,
    onFilterChange,
    onClearCompleted
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            
            <Filters
                filterSelected={filterSelected}
                onFilterChange={onFilterChange}
            />

            {completedCount > 0 && (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                >
                    Limpiar completadas
                </button>
            )}
        </footer>
    )
}