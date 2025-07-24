// src/components/ThemeToggle/ThemeToggle.tsx
import { useThemeStore } from '../../store'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#333' : '#ddd',
        color: theme === 'light' ? '#fff' : '#000',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '5px',
        marginTop: '1rem',
        cursor: 'pointer'
      }}
    >
      Cambiar a {theme === 'light' ? 'oscuro 🌙' : 'claro ☀️'}
    </button>
  )
}

export default ThemeToggle
