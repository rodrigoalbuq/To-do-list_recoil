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
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        id={`todo-${todo.id}`}
        name={`todo-${todo.id}`}
        type="checkbox" 
        checked={todo.completed} 
        onChange={toggleComplete}
        className="todo-checkbox"
        aria-label={`Marcar tarefa "${todo.text}" como ${todo.completed ? 'pendente' : 'concluída'}`}
      />
      <label htmlFor={`todo-${todo.id}`} className="todo-text-label">
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </label>
      <button onClick={remove} className="remove-button" aria-label={`Remover tarefa "${todo.text}"`}>
        🗑️ Remover
      </button>
    </li>
  )
}
