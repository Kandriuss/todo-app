export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Todo['title']
export type TodoCompleted = Pick<Todo, 'completed'>


export type ListOfTodos = Todo[]
 