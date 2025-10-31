import { useRecoilState } from 'recoil'
import { todosState } from '../atoms/todosAtom'

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todosState)

  function toggleComplete() {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t)),
    )
  }

  function remove() {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  return (
    <li 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      role="listitem"
      aria-label={`Tarefa: ${todo.text}. Status: ${todo.completed ? 'concluída' : 'pendente'}`}
    >
      <input 
        id={`todo-${todo.id}`}
        name={`todo-${todo.id}`}
        type="checkbox" 
        checked={todo.completed} 
        onChange={toggleComplete}
        className="todo-checkbox"
        aria-label={`Marcar tarefa "${todo.text}" como ${todo.completed ? 'pendente' : 'concluída'}`}
        aria-describedby={`todo-text-${todo.id}`}
      />
      <label htmlFor={`todo-${todo.id}`} className="todo-text-label">
        <span 
          id={`todo-text-${todo.id}`}
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
          aria-label={`Texto da tarefa: ${todo.text}`}
        >
          {todo.text}
        </span>
      </label>
      <button 
        onClick={remove} 
        className="remove-button" 
        aria-label={`Remover tarefa "${todo.text}"`}
        title={`Remover tarefa: ${todo.text}`}
      >
        🗑️ Remover
      </button>
    </li>
  )
}
