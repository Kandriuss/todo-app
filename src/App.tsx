import { useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { Header } from './components/Header'
import { type FilterValue, type TodoId, type Todo as TodoType } from './Types.d'
import { TODO_FILTERS } from './utils/consts'
import { Footer } from './components/Footer/Footer'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import { useThemeStore } from './store'

const mockTodos = [
  { id: '1', title: 'Hacer la migracion de MongoDB a PostgreSQL', completed: false },
  { id: '2', title: 'Ver curso de React', completed: true },
  { id: '3', title: 'Ver como descargar PHP y Laravel', completed: true },
]

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const { setTheme } = useThemeStore();

  // Se define el efecto para setear el tema inicial
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  // Se define la funcion handleCompleted
  const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => {
    // Se define la funcion handleCompleted que recibe un id y un completed y lo setea en el estado todos
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { 
          ...todo, 
          completed: completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  // Se define la funcion handleFilterChange que recibe un filter y lo setea en el estado filterSelected
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  // Se define la funcion handleClearCompleted que filtra los todos y elimina los que estan completados
  const handleClearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  // Se define la funcion handleRemove que recibe un id y elimina el todo correspondiente
  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (   
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos} 
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
      <ThemeToggle />
    </div>
  )
}

export default App
